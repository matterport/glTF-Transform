import { Document, Transform } from '@gltf-transform/core';

const NAME = '@gltf-transform/split';

interface SplitOptions {
	meshes: Array<string>;
}

const DEFAULT_OPTIONS: SplitOptions =  {
	meshes: []
};

const split = (options: SplitOptions): Transform => {

	options = {...DEFAULT_OPTIONS, ...options};

	return (doc: Document): void => {

		const logger = doc.getLogger();

		doc.getRoot().listMeshes()
			.forEach((mesh, meshIndex) => {
				if (!mesh.getName() || !options.meshes.includes(mesh.getName())) {
					logger.debug(`${NAME}: Skipping mesh at index ${meshIndex} with name "${mesh.getName()}".`);
					return;
				}

				logger.debug(`${NAME}: Creating buffer for mesh "${mesh.getName()}".`);

				const buffer = doc.createBuffer(mesh.getName())
					.setURI(`${mesh.getName()}.bin`);

				mesh.listPrimitives()
					.forEach((primitive) => {
						if (primitive.getIndices()) {
							primitive.getIndices().setBuffer(buffer);
						}
						primitive.listAttributes()
							.forEach((attribute) => attribute.setBuffer(buffer));
					})
			});

		logger.debug(`${NAME}: Complete.`);
	};

}




export { split };
