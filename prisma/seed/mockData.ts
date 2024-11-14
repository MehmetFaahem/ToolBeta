import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c4fb9b8f-cba1-468a-bc7e-391afd597e5b', '1Chelsea.Fritsch95@yahoo.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=3', 'def456uvw', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c31533a9-6272-45c3-b5f3-1f440139ebb1', '10Elian_Aufderhar-Labadie@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=12', 'def456uvw', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('d0e27fb2-6363-4bd3-be8d-5a6dc7794417', '19Walter.Pagac@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'ghi789rst', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('06d4c0c9-6046-47c6-a7df-b18212663749', '28Keyon1@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=30', 'jkl012opq', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2134760c-d1af-434b-a76e-733145a107d0', '37Newell89@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=39', 'def456uvw', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('dbc9386e-37e7-4abc-828e-374d9d7c05b3', '46Leonard33@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=48', 'def456uvw', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4ea3195c-5bbc-4dc0-99b4-5edcdae5b989', '55Lewis.Considine18@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=57', 'abc123xyz', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c7e6bd20-7802-47d7-910b-aae3cac132f4', '73Darius.Pagac82@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'abc123xyz', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('88f43054-a595-4403-8064-a4f2b2810ba8', '82Chelsey_Dare15@gmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=84', 'ghi789rst', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('f1d7b491-57af-4272-8f9c-458ff0aa3108', 'MP3ConverterPro', 'Story Downloader', 'Convert Instagram videos to highquality MP3 files.', false);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('ab44cf4d-f8ee-4097-b566-9d37e19bc505', 'StoryDownloader', 'Story Downloader', 'Easily save Instagram Reels to your device.', true);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('5a40cf55-e0b1-4fd7-abe4-250b9406cce8', 'HashTagGenie', 'Hashtag Generator', 'Easily save Instagram Reels to your device.', true);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('f9ce90ac-8ea2-49e7-a19d-432365484177', 'InstaReelSaver', 'Reel Downloader', 'Download Instagram photos and thumbnails effortlessly.', false);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('b92b66cd-3b4f-4230-81a3-f9e14f951bbe', 'StoryDownloader', 'Hashtag Generator', 'Generate the most relevant hashtags for your posts.', false);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('c7fcff13-fa8c-4f4a-9637-7f431e5a8484', 'InstaReelSaver', 'Story Downloader', 'Download Instagram photos and thumbnails effortlessly.', false);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('c3659c9a-44e5-47a2-b29f-8ee87e3e56d9', 'PhotoGrabber', 'Photo Downloader', 'Convert Instagram videos to highquality MP3 files.', false);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('db701470-de86-4981-8116-84610d45e0f7', 'InstaReelSaver', 'Video Converter', 'Convert Instagram videos to highquality MP3 files.', false);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('9bf1782e-0d13-4b4e-9636-e287ae192621', 'MP3ConverterPro', 'Photo Downloader', 'Generate the most relevant hashtags for your posts.', true);
INSERT INTO "Tool" ("id", "name", "type", "description", "isActive") VALUES ('8d4fdcc5-d219-41bc-87c2-7944f51d1009', 'MP3ConverterPro', 'Reel Downloader', 'Generate the most relevant hashtags for your posts.', true);

INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('07a9fee1-e02b-4199-b33b-c192279cf8bd', 'https://i.imgur.com/YfJQV5z.png?id=141', 'video', 'https://i.imgur.com/YfJQV5z.png?id=143', 'Cityscape', 'failed', 'd0e27fb2-6363-4bd3-be8d-5a6dc7794417');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('fdcf0a6f-aa83-4658-aa1c-2b2bf0e23619', 'https://i.imgur.com/YfJQV5z.png?id=147', 'photo', 'https://i.imgur.com/YfJQV5z.png?id=149', 'Birthday Party', 'failed', '06d4c0c9-6046-47c6-a7df-b18212663749');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('f8ad35e3-bfd7-4bbb-a38b-a653cdb504d1', 'https://i.imgur.com/YfJQV5z.png?id=153', 'video', 'https://i.imgur.com/YfJQV5z.png?id=155', 'Birthday Party', 'pending', '06d4c0c9-6046-47c6-a7df-b18212663749');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('7bc37928-4ac1-4140-ae98-934c8750c2f8', 'https://i.imgur.com/YfJQV5z.png?id=159', 'video', 'https://i.imgur.com/YfJQV5z.png?id=161', 'Concert Highlights', 'pending', '88f43054-a595-4403-8064-a4f2b2810ba8');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('8726f934-b372-442c-b2be-6cbc32b024d0', 'https://i.imgur.com/YfJQV5z.png?id=165', 'photo', 'https://i.imgur.com/YfJQV5z.png?id=167', 'Summer Vacation', 'in_progress', '06d4c0c9-6046-47c6-a7df-b18212663749');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('385e877e-0459-4842-b94d-9e5fa9505a1b', 'https://i.imgur.com/YfJQV5z.png?id=171', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=173', 'Birthday Party', 'in_progress', '4ea3195c-5bbc-4dc0-99b4-5edcdae5b989');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('3061206d-68ef-4c35-be5c-7f39ed1a640d', 'https://i.imgur.com/YfJQV5z.png?id=177', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=179', 'Summer Vacation', 'pending', 'd0e27fb2-6363-4bd3-be8d-5a6dc7794417');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('c9d1775f-dcde-4f4a-902a-d7b9e512ec76', 'https://i.imgur.com/YfJQV5z.png?id=183', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=185', 'Concert Highlights', 'completed', 'c31533a9-6272-45c3-b5f3-1f440139ebb1');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('4c97c89a-7325-4f3a-83aa-f622b050af49', 'https://i.imgur.com/YfJQV5z.png?id=189', 'video', 'https://i.imgur.com/YfJQV5z.png?id=191', 'Cityscape', 'completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Download" ("id", "mediaUrl", "mediaType", "sourceUrl", "title", "status", "userId") VALUES ('c7508064-0cee-42e7-8686-8412d92d25a5', 'https://i.imgur.com/YfJQV5z.png?id=195', 'audio', 'https://i.imgur.com/YfJQV5z.png?id=197', 'Nature Walk', 'failed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('31e19537-78fc-4cfe-a85d-edbb375f8c9a', 'SummerVibes2023', 'Motivational hashtags for fitness and health journeys.', 'c31533a9-6272-45c3-b5f3-1f440139ebb1');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('d9c39dab-d2c4-4387-a57f-6735e9af04f3', 'FoodieAdventures', 'Hashtags for travel enthusiasts and explorers.', 'd0e27fb2-6363-4bd3-be8d-5a6dc7794417');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('13a0e18c-a2d2-49b8-854a-bf7406421e16', 'SummerVibes2023', 'Trending hashtags for the latest in technology and gadgets.', '88f43054-a595-4403-8064-a4f2b2810ba8');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('152e9c63-346b-4b76-b5d6-387705fc59eb', 'FoodieAdventures', 'A collection of hashtags for summerthemed posts.', '88f43054-a595-4403-8064-a4f2b2810ba8');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('a60ab7dc-9aee-4141-b028-6f7a5ce62a24', 'SummerVibes2023', 'Trending hashtags for the latest in technology and gadgets.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('68610ef8-0933-4840-93cd-ff049d35ab5b', 'SummerVibes2023', 'Motivational hashtags for fitness and health journeys.', 'c7e6bd20-7802-47d7-910b-aae3cac132f4');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('db5d8172-62c1-45e4-b6f6-fa113486130b', 'FitnessJourney', 'A collection of hashtags for summerthemed posts.', 'c4fb9b8f-cba1-468a-bc7e-391afd597e5b');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('d24efef0-6490-44ff-a8d1-f5ad95f5bcf7', 'TravelGoals', 'A collection of hashtags for summerthemed posts.', 'c7e6bd20-7802-47d7-910b-aae3cac132f4');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('5133e661-4072-48f9-9f05-4681cfe6c559', 'SummerVibes2023', 'A collection of hashtags for summerthemed posts.', 'c7e6bd20-7802-47d7-910b-aae3cac132f4');
INSERT INTO "HashtagSet" ("id", "name", "description", "userId") VALUES ('99b9e64c-7786-4f1c-a45b-4b59deb93ded', 'FoodieAdventures', 'A collection of hashtags for summerthemed posts.', 'c7e6bd20-7802-47d7-910b-aae3cac132f4');

INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('7bf321e1-4ec5-4e1c-a75b-4164396d43e4', 'Fashionista OOTD StyleInspo', 234, '68610ef8-0933-4840-93cd-ff049d35ab5b');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('f88ad8d0-ad67-4e86-945e-10d5b8e890a2', 'FitnessJourney GymLife HealthyLiving', 445, 'd9c39dab-d2c4-4387-a57f-6735e9af04f3');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('86fa277d-d86e-4b3a-bbef-e34a11f938ce', 'TechTrends Innovation FutureTech', 714, 'd9c39dab-d2c4-4387-a57f-6735e9af04f3');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('86f229f9-93ca-4458-9790-c26d3944d88f', 'Fashionista OOTD StyleInspo', 526, '68610ef8-0933-4840-93cd-ff049d35ab5b');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('96fe9640-a554-4a50-be63-f4e6d67b05e7', 'FoodieLife YummyInMyTummy FoodPorn', 38, '13a0e18c-a2d2-49b8-854a-bf7406421e16');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('c6d76fa7-8396-4691-8b7a-efb693228120', 'Fashionista OOTD StyleInspo', 879, 'd9c39dab-d2c4-4387-a57f-6735e9af04f3');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('53074c54-355a-408d-b8d9-f36bc4d84c40', 'TravelGoals Wanderlust AdventureTime', 637, 'a60ab7dc-9aee-4141-b028-6f7a5ce62a24');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('ebae00a6-6bd1-4df6-9833-c41791efc06d', 'TravelGoals Wanderlust AdventureTime', 45, 'db5d8172-62c1-45e4-b6f6-fa113486130b');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('a5bcb5a2-a289-462a-86c9-436fafca546c', 'FitnessJourney GymLife HealthyLiving', 496, '68610ef8-0933-4840-93cd-ff049d35ab5b');
INSERT INTO "HashtagCombination" ("id", "hashtags", "count", "hashtagSetId") VALUES ('72cf2f13-bd51-4821-aed2-e67ea366d083', 'TechTrends Innovation FutureTech', 673, '68610ef8-0933-4840-93cd-ff049d35ab5b');

INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('8f0058b9-a052-4c25-aed2-e5f41d25eea8', 'https://i.imgur.com/YfJQV5z.png?id=261', 'Download Instagram Reels', 'Completed', '88f43054-a595-4403-8064-a4f2b2810ba8', '5a40cf55-e0b1-4fd7-abe4-250b9406cce8');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('4b2c98c2-70e6-4143-8de2-ca62acd1b342', 'https://i.imgur.com/YfJQV5z.png?id=265', 'Convert Instagram Video to MP3', 'Pending', '88f43054-a595-4403-8064-a4f2b2810ba8', 'f1d7b491-57af-4272-8f9c-458ff0aa3108');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('7c805df8-2b06-4cdf-8ab5-116b042a20c6', 'https://i.imgur.com/YfJQV5z.png?id=269', 'Generate Instagram Hashtags', 'Completed', 'c4fb9b8f-cba1-468a-bc7e-391afd597e5b', 'f1d7b491-57af-4272-8f9c-458ff0aa3108');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('0b43da81-71b0-4c00-8026-f586e2aecf8b', 'https://i.imgur.com/YfJQV5z.png?id=273', 'Download Instagram Stories', 'In Progress', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'db701470-de86-4981-8116-84610d45e0f7');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('6a85858c-5301-43e4-bae5-00c102d07fdc', 'https://i.imgur.com/YfJQV5z.png?id=277', 'Generate Instagram Hashtags', 'Completed', 'dbc9386e-37e7-4abc-828e-374d9d7c05b3', 'ab44cf4d-f8ee-4097-b566-9d37e19bc505');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('be1c96c6-045d-44fc-bbed-3854451199af', 'https://i.imgur.com/YfJQV5z.png?id=281', 'Download Facebook Reels', 'Cancelled', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b92b66cd-3b4f-4230-81a3-f9e14f951bbe');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('5a503012-5d25-4427-80de-62386f786b20', 'https://i.imgur.com/YfJQV5z.png?id=285', 'Generate Instagram Hashtags', 'Pending', '2134760c-d1af-434b-a76e-733145a107d0', 'b92b66cd-3b4f-4230-81a3-f9e14f951bbe');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('ffce018c-ceed-4139-a352-01e57e8417c8', 'https://i.imgur.com/YfJQV5z.png?id=289', 'Convert Instagram Video to MP3', 'Pending', '4ea3195c-5bbc-4dc0-99b4-5edcdae5b989', 'b92b66cd-3b4f-4230-81a3-f9e14f951bbe');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('dcc511fa-fa98-4266-8b39-984d1fbc7795', 'https://i.imgur.com/YfJQV5z.png?id=293', 'Download Instagram Stories', 'In Progress', '4ea3195c-5bbc-4dc0-99b4-5edcdae5b989', '8d4fdcc5-d219-41bc-87c2-7944f51d1009');
INSERT INTO "RecentActivity" ("id", "sourceUrl", "activityType", "status", "userId", "toolId") VALUES ('f7099e48-ca11-4d6f-8cda-a03de5a531f9', 'https://i.imgur.com/YfJQV5z.png?id=297', 'Convert Instagram Video to MP3', 'Pending', '06d4c0c9-6046-47c6-a7df-b18212663749', '5a40cf55-e0b1-4fd7-abe4-250b9406cce8');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
