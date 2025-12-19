# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive 3D portfolio website built with Three.js, TypeScript, React, and WebGL. The site features a 3D office environment with an interactive computer monitor that displays an embedded 2D OS interface (hosted separately at https://os.henryheffernan.com/). The experience includes camera animations, spatial audio, particle effects, and custom shaders.

## Build and Development Commands

```bash
# Install dependencies
npm i

# Run development server with hot reload
npm run dev

# Build for production (outputs to /public directory)
npm run build

# Serve production build via Express server
npm start
```

## Architecture

### Application Singleton Pattern
The entire application is managed through a singleton pattern in [src/Application/Application.ts](src/Application/Application.ts). This class:
- Initializes all core systems (Debug, Sizes, Time, Camera, Renderer, World, UI)
- Manages the main update loop triggered by Time events
- Handles resize events
- Provides global access to shared resources

### Core Systems

**Resources System** ([src/Application/Utils/Resources.ts](src/Application/Utils/Resources.ts)):
- Centralized asset loader using Three.js loaders (GLTF, Texture, Audio)
- Loads all assets defined in [src/Application/sources.ts](src/Application/sources.ts)
- Emits 'ready' event when all resources are loaded, which triggers World initialization
- Assets are organized by type: `gltfModel`, `texture`, `cubeTexture`, `audio`

**World System** ([src/Application/World/World.ts](src/Application/World/World.ts)):
- Waits for Resources 'ready' event before initializing scene objects
- Manages all 3D objects: Environment, Decor, ComputerSetup, MonitorScreen, CoffeeSteam
- Coordinates the AudioManager for spatial and ambient audio

**Camera System** ([src/Application/Camera/Camera.ts](src/Application/Camera/Camera.ts)):
- Keyframe-based camera animation system using TWEEN.js
- Camera states defined in [src/Application/Camera/CameraKeyframes.ts](src/Application/Camera/CameraKeyframes.ts)
- States: IDLE, MONITOR, LOADING, DESK, ORBIT_CONTROLS_START
- Supports both scripted animations and free camera mode with OrbitControls
- Transitions triggered by user interaction and UIEventBus events

**Monitor Screen** ([src/Application/World/MonitorScreen.ts](src/Application/World/MonitorScreen.ts)):
- Embeds an iframe using CSS3DRenderer for the 2D OS interface
- Creates occlusion planes using THREE.NoBlending to properly hide CSS content behind WebGL geometry
- Adds texture layers (smudges, shadows, video effects) for realism
- Handles mouse event bubbling between iframe and main application
- URL configurable: production uses https://os.henryheffernan.com/, dev mode (?dev query param) uses http://localhost:3000/

**Audio System** ([src/Application/Audio/AudioManager.ts](src/Application/Audio/AudioManager.ts)):
- Uses THREE.PositionalAudio for spatial audio sources
- Audio pool management with automatic cleanup on audio end
- Supports filters, random detune, looping, and pitch control
- AudioContext resumes on loadingScreenDone event
- Mute toggle controlled via UIEventBus

**UI System** ([src/Application/UI/](src/Application/UI/)):
- React-based UI rendered with ReactDOM
- EventBus pattern ([src/Application/UI/EventBus.ts](src/Application/UI/EventBus.ts)) for communication between React components and Three.js application
- Components: LoadingScreen, HelpPrompt, InterfaceUI (volume controls), FreeCamToggle, MuteToggle
- Two separate render roots: `#ui` for overlays, `#ui-interactive` for interface controls

### Event System

The codebase uses a custom EventEmitter class ([src/Application/Utils/EventEmitter.ts](src/Application/Utils/EventEmitter.ts)) for communication between systems. Key event flows:

- Resources emits 'ready' → World initializes scene objects
- Time emits 'tick' → Application update loop runs
- Sizes emits 'resize' → Camera and Renderer update dimensions
- UIEventBus events: 'loadingScreenDone', 'enterMonitor', 'leftMonitor', 'freeCamToggle', 'muteToggle'
- Camera events: 'enterMonitor', 'leftMonitor'

### Webpack Configuration

Webpack is split into three configs in [bundler/](bundler/):
- [webpack.common.js](bundler/webpack.common.js): Shared configuration for all environments
- [webpack.dev.js](bundler/webpack.dev.js): Development server configuration
- [webpack.prod.js](bundler/webpack.prod.js): Production build configuration

Key loaders:
- `ts-loader` for TypeScript files
- `babel-loader` for TSX (React) files
- `glslify-loader` + `raw-loader` + `glslify-import-loader` for GLSL shaders
- `file-loader` for audio files
- Static assets copied from [static/](static/) directory

### Shaders

Custom GLSL shaders are located in [src/Application/Shaders/](src/Application/Shaders/):
- `coffee/` - Shaders for coffee steam particle effects
- `screen/` - Shaders for monitor screen rendering

### Development Notes

- Debug mode: Add `?debug` query parameter to URL to enable Stats.js performance monitoring
- Dev iframe mode: Add `?dev` query parameter to load iframe from localhost:3000 instead of production URL
- The project uses TypeScript with a custom [src/types.d.ts](src/types.d.ts) for Three.js augmentations and global types
- All 3D models use baked textures for performance (loaded as .glb with corresponding .jpg textures)
- Camera interactions are triggered by mouse events - clicking toggles between IDLE and DESK states
- Hovering over the monitor iframe triggers camera transition to MONITOR state
