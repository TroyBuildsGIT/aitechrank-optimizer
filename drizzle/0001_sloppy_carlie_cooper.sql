CREATE TABLE `evaluations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`url` text NOT NULL,
	`pageType` enum('homepage','airbnb','landing') NOT NULL,
	`overallScore` int NOT NULL,
	`performanceScore` int NOT NULL,
	`contentScore` int NOT NULL,
	`designScore` int NOT NULL,
	`conversionScore` int NOT NULL,
	`completenessScore` int NOT NULL,
	`issues` text NOT NULL,
	`strengths` text NOT NULL,
	`recommendations` text NOT NULL,
	`screenshotUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `evaluations_id` PRIMARY KEY(`id`)
);
