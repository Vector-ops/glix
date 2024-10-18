export interface IPost {
	permalink: string;
	content: string;
	title: string;
	slug: string;
	date: Date | string;
	description?: string;
	tags: string[];
	metadata: Metadata;
	excerpt: string;
	cover?: Image | undefined;
	video?: string | undefined;
	link: string;
	publish: string | Date;
}

export interface IMetadata {
	readingTime: number;
	wordCount: number;
}
