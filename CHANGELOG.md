# Changelog

## v0.13 — 🚧 Unreleased

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/13)

**Features:**

**Breaking changes:**

## v0.12

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/12)

**Features:**

- Add compression/decompression support for `EXT_meshopt_compression`. [#314](https://github.com/donmccurdy/glTF-Transform/pull/314) [#323](https://github.com/donmccurdy/glTF-Transform/pull/323)
- Add `reorder()` function. [#321](https://github.com/donmccurdy/glTF-Transform/pull/321)
- Faster, smaller CLI installation. [#281](https://github.com/donmccurdy/glTF-Transform/pull/281)
- Improved `textureResize()` API. [#282](https://github.com/donmccurdy/glTF-Transform/pull/282)
- Add `node.setMatrix(...)`. [#270](https://github.com/donmccurdy/glTF-Transform/issues/270)
- Parse in-memory Data URIs with `readJSON`. [#266](https://github.com/donmccurdy/glTF-Transform/pull/266)
- Support `.extras` on Root object [#339](https://github.com/donmccurdy/glTF-Transform/pull/339)

**Breaking changes:**

- Remove ao() function and dependencies. [#281](https://github.com/donmccurdy/glTF-Transform/pull/281)

## v0.11

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/11)

**Features:**

- Add `textureResize()` function. [#267](https://github.com/donmccurdy/glTF-Transform/pull/267)
- Add `quantizationVolume: 'scene' | 'mesh'` option to `quantize()` and Draco compression. Fixes [#257](https://github.com/donmccurdy/glTF-Transform/issues/257). [#272](https://github.com/donmccurdy/glTF-Transform/pull/272)
- Support GLB files without binary data (e.g. just a node graph). [#245](https://github.com/donmccurdy/glTF-Transform/pull/245)
- Improve type-checking throughout the library, with [TypeScript's strict checks](https://www.typescriptlang.org/tsconfig#strict).
- Add API documentation for `@gltf-transform/extensions` and `@gltf-transform/functions`, with [Typedoc](https://github.com/TypeStrong/typedoc) v0.20.

**Breaking changes:**

- Rename `@gltf-transform/lib` to `@gltf-transform/functions`. [#249](https://github.com/donmccurdy/glTF-Transform/pull/249)
- Move `ao()` from `@gltf-transform/functions` to the CLI, cutting size and dependencies of the functions package.
- I/O `writeJSON` option `isGLB: true` changed to `format: Format.GLB`.

## v0.10

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/10)

**Features:**

- Add 'ktxfix' command in CLI. [#222](https://github.com/donmccurdy/glTF-Transform/pull/222)
- Add getter/setter for default [Scene](https://gltf-transform.donmccurdy.com/classes/root.html) on [Root](https://gltf-transform.donmccurdy.com/classes/root.html). [#202](https://github.com/donmccurdy/glTF-Transform/pull/202)

**Breaking changes:**

- Material extensions now track RGBA channel usage of each texture, allowing improvements in KTX 2.0 support. [#221](https://github.com/donmccurdy/glTF-Transform/pull/221)

## v0.9

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/9)

**Features:**

- Add 'instance' transform. [#169](https://github.com/donmccurdy/glTF-Transform/pull/169)
- Add 'prune' transform. [#162](https://github.com/donmccurdy/glTF-Transform/pull/162)
- Add 'resample' transform. [#158](https://github.com/donmccurdy/glTF-Transform/pull/158)
- Add 'tangents' transform. [#175](https://github.com/donmccurdy/glTF-Transform/pull/175)
- Add 'quantize' transform. [#59](https://github.com/donmccurdy/glTF-Transform/pull/59)
- Add `KHR_materials_volume` extension. [#161](https://github.com/donmccurdy/glTF-Transform/pull/161)
- Add `EXT_mesh_gpu_instancing` extension. [#115](https://github.com/donmccurdy/glTF-Transform/pull/115)
- Add `--format={pretty,csv,md}` output options for CLI `inspect` command.
- Add `--vertex-layout={interleaved,separate}` options for CLI output.

**Breaking changes:**

- Stricter type checking.
- Enum values moved from `GLTF.*` to static properties of the relevant class. Primitive enum values are now allowed.
- Enable esModuleInterop in TS config.
- 'dedup' transform takes a `propertyTypes: string[]` array, rather than boolean flags for each property type.
- 'draco' CLI command options renamed (hyphenated) for consistency.

## v0.8

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/8)

**Features:**

- Add 'weld' and 'unweld' transforms.
- Add encoding/compression support for `KHR_draco_mesh_compression`.
- Add KTX and WebP support in utils and 'inspect' function.
- Add `KHR_materials_variants` extension.

**Breaking changes:**

- Stricter type checking.
- External type definitions are now installed as dependencies.

## v0.7

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/7)

**Features:**

- Add 'center' and 'sequence' transforms.
- Add 'bounds' helper.
- Enhance 'partition' transform to support animations.
- Add `KHR_draco_mesh_compression` extension (decode only).
- Add `KHR_texture_transform` extension.
- Add `EXT_texture_webp` extension.
- Add `KHR_materials_sheen` extension.

**Breaking changes:**

- Merged TextureSampler properties into TextureInfo.
- TextureInfo now extends from ExtensibleProperty.
- Simplified I/O API. Renamed:
  - NativeDocument -> JSONDocument
  - unpackGLB -> readBinary
  - packGLB -> writeBinary
  - createDocument -> readJSON
  - createNativeDocument -> writeJSON
  - unpackGLBToNativeDocument -> binaryToJSON

## v0.6

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/6)

**Features:**

- Add world transform API (getWorldTranslation/getWorldRotation/getWorldScale/getWorldMatrix) and getMatrix to Node.
- Add ColorUtils and helper methods to work with colors in hexadecimal and sRGB.
- Add traverse method to Node.
- Simplified Extension API.
- Add Extras API.

**CLI:**

- Accept textures in `merge` command.

**Breaking changes:**

- getExtension/setExtension syntax changed to accept extension names, not constructors. See [ExtensibleProperty](https://gltf-transform.donmccurdy.com/classes/extensibleproperty.html).
- Scene addNode/removeNode/listNodes are now addChild/removeChild/listChildren, for consistency with Node API.

## v0.5

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/5)

## v0.4

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/4)

## v0.2

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/2)

## v0.1

[Milestone](https://github.com/donmccurdy/glTF-Transform/milestone/1)
