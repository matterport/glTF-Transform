/* eslint-disable max-len */

// This file is part of meshoptimizer library and is distributed under the terms of MIT License.
// Copyright (C) 2016-2021, by Arseny Kapoulkine (arseny.kapoulkine@gmail.com)
export declare interface MeshoptDecoder {
	supported: boolean;
	ready: Promise<void>;
	decodeVertexBuffer: (target: Uint8Array, count: number, size: number, source: Uint8Array, filter?: string) => void;
	decodeIndexBuffer: (target: Uint8Array, count: number, size: number, source: Uint8Array) => void;
	decodeIndexSequence: (target: Uint8Array, count: number, size: number, source: Uint8Array) => void;
	decodeGltfBuffer: (target: Uint8Array, count: number, size: number, source: Uint8Array, mode: string, filter?: string) => void;
}