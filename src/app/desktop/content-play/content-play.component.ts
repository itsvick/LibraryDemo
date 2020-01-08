import { Hierarchy } from './hierarchy.model';
import { Component, OnInit } from '@angular/core';
import { toc1 } from './tocdata';

@Component({
  selector: 'app-content-play',
  templateUrl: './content-play.component.html',
  styleUrls: ['./content-play.component.scss']
})
export class ContentPlayComponent implements OnInit {
  toc1 = toc1;
  public tocContent = {
    "ownershipType": [
      "createdBy"
    ],
    "subject": "English",
    "channel": "01231711180382208027",
    "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266318786376499214737/publish-book_1545799458880_do_21266318786376499214737_1.0_spine.ecar",
    "organisation": [
      "345 org"
    ],
    "language": [
      "English"
    ],
    "variants": {
      "spine": {
        "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266318786376499214737/publish-book_1545799458880_do_21266318786376499214737_1.0_spine.ecar",
        "size": 72093
      }
    },
    "mimeType": "application/vnd.ekstep.content-collection",
    "gradeLevel": [
      "Class 1"
    ],
    "appIcon": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21266318786376499214737/artifact/english-short-stories-for-beginners-workbook-2_1024x1024_1530456979685.thumb.png",
    "children": [
      {
        "ownershipType": [
          "createdBy"
        ],
        "code": "do_21266318801779097614738",
        "channel": "01231711180382208027",
        "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266318801779097614738/untitled-textbook_1545799458176_do_21266318801779097614738_1.0_spine.ecar",
        "language": [
          "English"
        ],
        "variants": {
          "spine": {
            "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21266318801779097614738/untitled-textbook_1545799458176_do_21266318801779097614738_1.0_spine.ecar",
            "size": 47575
          }
        },
        "mimeType": "application/vnd.ekstep.content-collection",
        "idealScreenSize": "normal",
        "createdOn": "2018-12-26T04:41:58.578+0000",
        "children": [
          {
            "ownershipType": [
              "createdBy"
            ],
            "subject": "English",
            "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_2122952875771248641386/ritika_1500889675005_do_2122952875771248641386_1.0.ecar",
            "channel": "in.ekstep",
            "language": [
              "English"
            ],
            "mimeType": "application/vnd.ekstep.content-collection",
            "variants": {
              "spine": {
                "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_2122952875771248641386/ritika_1500889675801_do_2122952875771248641386_1.0_spine.ecar",
                "size": 1470
              }
            },
            "gradeLevel": [
              "KG"
            ],
            "children": [
              {
                "ownershipType": [
                  "createdBy"
                ],
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_2122952599231856641325/ayub_story_1500886360681_do_2122952599231856641325_1.0.ecar",
                "questions": [],
                "language": [
                  "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_2122952599231856641325/ayub_story_1500886361321_do_2122952599231856641325_1.0_spine.ecar",
                    "size": 895
                  }
                },
                "gradeLevel": [
                  "KG"
                ],
                "children": [],
                "appId": "staging.diksha.portal",
                "usesContent": [],
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_2122952599231856641325/artifact/1500886360097_do_2122952599231856641325.zip",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T12:40:25.705+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "Amit Kumar",
                "identifier": "do_2122952599231856641325",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "author": "Ayub",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "index": 1,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "f24442ca-8d5e-4672-8885-493fe0b39067",
                "languageCode": "en",
                "prevState": "Review",
                "lastPublishedOn": "2017-07-24T08:52:40.681+0000",
                "size": 4610980,
                "concepts": [],
                "name": "Ayub_Story",
                "status": "Flagged",
                "code": "org.sunbird.0JNIge",
                "flags": [
                  "Comment"
                ],
                "description": "Ayub_Story",
                "lastFlaggedOn": "2017-08-31T14:50:32.171+0000",
                "medium": "English",
                "flaggedBy": [
                  "Amit Kumar"
                ],
                "idealScreenSize": "normal",
                "createdOn": "2017-07-24T08:50:21.091+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2017-08-31T14:50:32.182+0000",
                "channelId": "sunbird",
                "createdFor": [
                  "sunbird"
                ],
                "flagReasons": [
                  "Copyright violation"
                ],
                "os": [
                  "All"
                ],
                "pkgVersion": 1,
                "versionKey": "1504191032182",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2122952599231856641325/ayub_story_1500886360681_do_2122952599231856641325_1.0.ecar",
                "createdBy": "98e09d6e-b95b-4832-bfab-421e63d36aa7",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "ownershipType": [
                  "createdBy"
                ],
                "subject": "English",
                "channel": "in.ekstep",
                "downloadUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_2122951778195865601246/chrome_lesson_1500876428934_do_2122951778195865601246_2.0.ecar",
                "questions": [],
                "language": [
                  "English"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar-files/do_2122951778195865601246/chrome_lesson_1500876429053_do_2122951778195865601246_2.0_spine.ecar",
                    "size": 997
                  }
                },
                "gradeLevel": [
                  "KG"
                ],
                "children": [],
                "appId": "staging.diksha.portal",
                "usesContent": [],
                "contentEncoding": "gzip",
                "artifactUrl": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_2122951778195865601246/artifact/1500876279281_do_2122951778195865601246.zip",
                "contentType": "Resource",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T12:41:25.584+0000",
                "lastUpdatedBy": "Harish Kumar Gangula",
                "identifier": "do_2122951778195865601246",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "index": 2,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "ageGroup": [
                  ">10"
                ],
                "lastPublishedBy": "f24442ca-8d5e-4672-8885-493fe0b39067",
                "languageCode": "en",
                "prevState": "Draft",
                "lastPublishedOn": "2017-07-24T06:07:08.934+0000",
                "size": 1725,
                "concepts": [],
                "name": "Chrome_Lesson",
                "status": "Flagged",
                "code": "org.sunbird.pPJy2h",
                "flags": [
                  "RETERT"
                ],
                "description": "Chrome_worksheet",
                "lastFlaggedOn": "2017-08-14T04:30:02.593+0000",
                "medium": "English",
                "flaggedBy": [
                  "Harish Kumar Gangula"
                ],
                "idealScreenSize": "normal",
                "createdOn": "2017-07-24T06:05:48.462+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2017-08-14T04:30:02.613+0000",
                "channelId": "sunbird",
                "createdFor": [
                  "sunbird"
                ],
                "flagReasons": [
                  "Inappropriate content"
                ],
                "os": [
                  "All"
                ],
                "pkgVersion": 2,
                "versionKey": "1502685002613",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2122951778195865601246/chrome_lesson_1500876428934_do_2122951778195865601246_2.0.ecar",
                "createdBy": "98e09d6e-b95b-4832-bfab-421e63d36aa7",
                "compatibilityLevel": 2,
                "board": "CBSE",
                "resourceType": "Practice"
              }
            ],
            "appId": "staging.diksha.portal",
            "contentEncoding": "gzip",
            "mimeTypesCount": "{\"application/vnd.ekstep.ecml-archive\":2}",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T12:46:07.343+0000",
            "contentType": "Collection",
            "lastUpdatedBy": "f24442ca-8d5e-4672-8885-493fe0b39067",
            "identifier": "do_2122952875771248641386",
            "audience": [
              "Learner"
            ],
            "toc_url": "https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_2122952875771248641386/artifact/do_2122952875771248641386toc.json",
            "visibility": "Default",
            "contentTypesCount": "{\"Worksheet\":1,\"Story\":1}",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "index": 1,
            "mediaType": "content",
            "ageGroup": [
              ">10"
            ],
            "osId": "org.ekstep.quiz.app",
            "languageCode": "en",
            "lastPublishedBy": "f24442ca-8d5e-4672-8885-493fe0b39067",
            "prevState": "Review",
            "lastPublishedOn": "2017-07-24T09:47:53.446+0000",
            "size": 4612282,
            "name": "ritika",
            "status": "Live",
            "code": "org.sunbird.txwBlx",
            "description": "Description",
            "medium": "English",
            "idealScreenSize": "normal",
            "createdOn": "2017-07-24T09:46:36.816+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2017-07-24T09:48:22.407+0000",
            "channelId": "sunbird",
            "createdFor": [
              "sunbird"
            ],
            "os": [
              "All"
            ],
            "pkgVersion": 1,
            "versionKey": "1500889702407",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_2122952875771248641386/ritika_1500889675005_do_2122952875771248641386_1.0.ecar",
            "createdBy": "98e09d6e-b95b-4832-bfab-421e63d36aa7",
            "leafNodesCount": 2,
            "compatibilityLevel": 1,
            "resourceType": "Collection"
          },
          {
            "ownershipType": [
              "createdBy"
            ],
            "channel": "012315809814749184151",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_212349670217015296188/m10_1507529091646_do_212349670217015296188_1.0.ecar",
            "language": [
              "Telugu",
              "Assamese"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_212349670217015296188/m10_1507529092273_do_212349670217015296188_1.0_spine.ecar",
                "size": 388780
              }
            },
            "mimeType": "application/vnd.ekstep.content-collection",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_212349670217015296188/artifact/6_1507525590378.thumb.png",
            "gradeLevel": [
              "Class 1"
            ],
            "children": [
              {
                "ownershipType": [
                  "createdBy"
                ],
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21228031946955980819-latest",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21228031946955980819/test-review-process_1499851249497_do_21228031946955980819_1.0.ecar",
                "language": [
                  "Assamese"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21228031946955980819/test-review-process_1499851249759_do_21228031946955980819_1.0_spine.ecar",
                    "size": 43747
                  }
                },
                "source": "",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21228031946955980819/artifact/b2e046aac35b1661967cc7e5cd227bbd_1499850743161.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "staging.diksha.portal",
                "contentEncoding": "gzip",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21228031946955980819/artifact/1499062459032_do_21228031946955980819.zip",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T16:23:13.587+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "129",
                "identifier": "do_21228031946955980819",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "index": 1,
                "mediaType": "content",
                "ageGroup": [
                  "5-6",
                  "6-7"
                ],
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "129",
                "languageCode": "as",
                "prevState": "Review",
                "lastPublishedOn": "2017-07-12T09:20:49.497+0000",
                "size": 44312,
                "concepts": [
                  {
                    "identifier": "Num:C3:SC8",
                    "name": "Compares fractions",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": "Compares fractions",
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  },
                  {
                    "identifier": "Num:C3:SC9",
                    "name": "Division/Multiplication",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": "Division/Multiplicatio",
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "domain": [
                  "numeracy"
                ],
                "name": "Test review process",
                "publisher": "",
                "attributions": [
                  ""
                ],
                "status": "Live",
                "template": "",
                "code": "org.ekstep.numeracy.worksheet.7205",
                "description": "Test review process test test",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2122867772876800001216/artifact/b2e046aac35b1661967cc7e5cd227bbd_1499850743161.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-07-03T06:13:55.249+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2017-07-12T09:19:12.176+0000",
                "owner": "Bajaj",
                "createdFor": [
                  ""
                ],
                "creator": "Gouri Shanker Bajaj",
                "os": [
                  "All"
                ],
                "pkgVersion": 1,
                "versionKey": "1499851250066",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_21228031946955980819/test-review-process_1499851249497_do_21228031946955980819_1.0.ecar",
                "createdBy": "749",
                "compatibilityLevel": 2,
                "organization": [
                  ""
                ],
                "resourceType": "Practice"
              },
              {
                "ownershipType": [
                  "createdBy"
                ],
                "copyright": "",
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_20047427-latest",
                "channel": "in.ekstep",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_20047427/test_worksheet_addition-template_1478761211668_do_20047427_1.0.ecar",
                "questions": [],
                "language": [
                  "Telugu"
                ],
                "mimeType": "application/vnd.ekstep.ecml-archive",
                "source": "",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20047427/artifact/888b67f78da93afff46a2dda9fc6c86b_1475753098936.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "me_totalTimespent": 110.92,
                "me_averageTimespentPerSession": 27.73,
                "children": [],
                "appId": "staging.diksha.portal",
                "usesContent": [],
                "me_totalRatings": 0,
                "contentEncoding": "gzip",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/1476683823668_do_20047427.zip",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T16:23:13.934+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "239",
                "identifier": "do_20047427",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
                "portalOwner": "239",
                "index": 2,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "ageGroup": [
                  "5-6"
                ],
                "languageCode": "te",
                "license": "Creative Commons Attribution (CC BY)",
                "lastPublishedOn": "2016-11-10T07:00:12.575+0000",
                "size": 5474156,
                "concepts": [],
                "domain": [
                  "numeracy",
                  "literacy"
                ],
                "me_averageSessionsPerDevice": 2,
                "name": "Test_Worksheet_ADDITION TEMPLATE",
                "publisher": "",
                "status": "Live",
                "template": "do_30019726",
                "me_averageInteractionsPerMin": 97.91,
                "code": "org.ekstep.literacy.worksheet.2508",
                "me_totalSessionsCount": 4,
                "imageCredits": [
                  "Paluru Sai",
                  "Sumangala GM",
                  "hfghf"
                ],
                "description": "Test",
                "idealScreenSize": "normal",
                "posterImage": "https://qa.ekstep.in/assets/public/content/888b67f78da93afff46a2dda9fc6c86b_1475753098936.jpeg",
                "createdOn": "2016-10-06T11:38:50.337+0000",
                "me_totalSideloads": 0,
                "me_totalComments": 1,
                "popularity": 110.92,
                "contentDisposition": "inline",
                "genre": [
                  "Picture Books",
                  "Chapter Books",
                  "Serial Books",
                  "Alphabet Books"
                ],
                "lastUpdatedOn": "2017-05-15T07:08:15.720+0000",
                "me_totalDevices": 2,
                "theme": [
                  "Adventure",
                  "Funny",
                  "History"
                ],
                "me_totalDownloads": 10,
                "owner": "External Testing vendor",
                "creator": "External Testing vendor",
                "os": [
                  "All"
                ],
                "soundCredits": [
                  "Sumangala GM",
                  "2"
                ],
                "me_totalInteractions": 181,
                "pkgVersion": 1,
                "versionKey": "1497245453487",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_20047427/test_worksheet_addition-template_1478761211668_do_20047427_1.0.ecar",
                "me_averageRating": 0,
                "createdBy": "239",
                "compatibilityLevel": 1,
                "resourceType": "Practice"
              }
            ],
            "appId": "staging.diksha.portal",
            "contentEncoding": "gzip",
            "mimeTypesCount": "{\"application/vnd.ekstep.ecml-archive\":2}",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-10-12T16:23:16.536+0000",
            "contentType": "Collection",
            "lastUpdatedBy": "Flag Reviewer User",
            "identifier": "do_212349670217015296188",
            "audience": [
              "Learner"
            ],
            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_212349670217015296188/artifact/do_212349670217015296188toc.json",
            "visibility": "Default",
            "contentTypesCount": "{\"Worksheet\":2}",
            "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
            "index": 2,
            "mediaType": "content",
            "ageGroup": [
              "6-7",
              "5-6"
            ],
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "languageCode": [
              "te",
              "as"
            ],
            "lastPublishedOn": "2017-10-09T06:04:50.783+0000",
            "size": 5838038,
            "domain": [
              "literacy",
              "numeracy"
            ],
            "name": "m10",
            "status": "Live",
            "code": "org.sunbird.q51oGu",
            "description": "hjbjnknk",
            "lastFlaggedOn": "2017-10-09T06:23:26.909+0000",
            "flaggedBy": [
              "Flag Reviewer User"
            ],
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_212349649632288768176/artifact/6_1507525590378.png",
            "idealScreenSize": "normal",
            "createdOn": "2017-10-09T05:48:22.663+0000",
            "genre": [
              "Picture Books",
              "Serial Books",
              "Alphabet Books",
              "Chapter Books"
            ],
            "contentDisposition": "inline",
            "lastUpdatedOn": "2017-10-09T06:30:13.787+0000",
            "theme": [
              "Adventure",
              "Funny",
              "History"
            ],
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "CreatorUser",
            "os": [
              "All"
            ],
            "pkgVersion": 1,
            "versionKey": "1507530613787",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_212349670217015296188/m10_1507529091646_do_212349670217015296188_1.0.ecar",
            "lastSubmittedOn": "2017-10-09T05:50:23.637+0000",
            "createdBy": "2aade7d9-6abf-433b-9a05-3b02cd2eb664",
            "leafNodesCount": 2,
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Collection"
          }
        ],
        "appId": "staging.diksha.portal",
        "contentDisposition": "inline",
        "contentEncoding": "gzip",
        "lastUpdatedOn": "2018-12-26T04:43:30.518+0000",
        "sYS_INTERNAL_LAST_UPDATED_ON": "2018-12-26T04:44:18.499+0000",
        "contentType": "TextBookUnit",
        "dialcodeRequired": "Yes",
        "identifier": "do_21266318801779097614738",
        "audience": [
          "Learner"
        ],
        "os": [
          "All"
        ],
        "visibility": "Parent",
        "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
        "index": 1,
        "mediaType": "content",
        "osId": "org.ekstep.launcher",
        "pkgVersion": 1,
        "versionKey": "1545799318578",
        "idealScreenDensity": "hdpi",
        "s3Key": "ecar_files/do_21266318801779097614738/untitled-textbook_1545799458176_do_21266318801779097614738_1.0_spine.ecar",
        "dialcodes": [
          "ZYNYMJ"
        ],
        "framework": "NCF",
        "lastPublishedOn": "2018-12-26T04:44:18.120+0000",
        "size": 47575,
        "compatibilityLevel": 1,
        "name": "Untitled Textbook",
        "status": "Live",
        "leafNodesCount": 4
      }
    ],
    "appId": "staging.diksha.portal",
    "contentEncoding": "gzip",
    "lockKey": "7cd7b36d-d154-447d-935c-3f4e685535d1",
    "contentType": "TextBook",
    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-12-26T04:44:19.005+0000",
    "lastUpdatedBy": "4ecf1cf7-0e31-4a53-97ea-aae1683309ce",
    "identifier": "do_21266318786376499214737",
    "audience": [
      "Learner"
    ],
    "visibility": "Default",
    "consumerId": "a9cb3a83-a164-4bf0-aa49-b834cebf1c07",
    "mediaType": "content",
    "osId": "org.ekstep.quiz.app",
    "lastPublishedBy": "44917d6c-629f-4911-b4c5-1ff0e910bc0e",
    "prevState": "Review",
    "qrCodeProcessId": "5a5b1d4c-7c6d-4dc5-a5d1-4bb4aef34d32",
    "size": 72093,
    "lastPublishedOn": "2018-12-26T04:44:18.834+0000",
    "name": "Publish Book",
    "status": "Live",
    "code": "org.sunbird.a7AdRL",
    "description": "Enter description for TextBook",
    "medium": "Marathi",
    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21253750356809318411895/artifact/english-short-stories-for-beginners-workbook-2_1024x1024_1530456979685.png",
    "idealScreenSize": "normal",
    "createdOn": "2018-12-26T04:41:39.775+0000",
    "reservedDialcodes": [
      "ZYNYMJ"
    ],
    "contentDisposition": "inline",
    "lastUpdatedOn": "2018-12-26T04:44:18.042+0000",
    "dialcodeRequired": "No",
    "owner": "JPBook Creator user",
    "createdFor": [
      "01231711180382208027"
    ],
    "creator": "JPBook Creator user",
    "os": [
      "All"
    ],
    "pkgVersion": 1,
    "versionKey": "1545799458042",
    "idealScreenDensity": "hdpi",
    "s3Key": "ecar_files/do_21266318786376499214737/publish-book_1545799458880_do_21266318786376499214737_1.0_spine.ecar",
    "dialcodes": [
      "ZYNYMJ"
    ],
    "framework": "NCF",
    "lastSubmittedOn": "2018-12-26T04:43:50.039+0000",
    "createdBy": "4ecf1cf7-0e31-4a53-97ea-aae1683309ce",
    "compatibilityLevel": 1,
    "ownedBy": "4ecf1cf7-0e31-4a53-97ea-aae1683309ce",
    "board": "State (Tamil Nadu)",
    "resourceType": "Book",
    "leafNodesCount": 4,
    "orgDetails": {
      "orgName": "345 org"
    }
  };
  mimeTypeFilters = ['all', 'video', 'interaction', 'docs'];

  public tocContent1 = {
    "keywords": [
      "vewvrereverre",
      "cewecewcewcewwe"
    ],
    "year": 2007,
    "subject": "English",
    "channel": "012315809814749184151",
    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393416328806401261/bookbook12345_1530681786772_do_2125393416328806401261_1.0_spine.ecar",
    "organisation": [
      "Consumption Org",
      "ORG25"
    ],
    "language": [
      "English"
    ],
    "variants": {
      "spine": {
        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393416328806401261/bookbook12345_1530681786772_do_2125393416328806401261_1.0_spine.ecar",
        "size": 681101
      }
    },
    "mimeType": "application/vnd.ekstep.content-collection",
    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125393416328806401261/artifact/cool-fb-profile-pictures-anonymous-facbook-profile-picture_1530681523277.thumb.jpg",
    "gradeLevel": [
      "Class 1"
    ],
    "children": [
      {
        "code": "4433c1c0-db35-4da3-98c7-e755d17418e1",
        "keywords": [
          "cewecewcewcewwe"
        ],
        "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
        "description": "dewqewwecew",
        "language": [
          "English"
        ],
        "variants": {
          "spine": {
            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
            "size": 623898
          }
        },
        "mimeType": "application/vnd.ekstep.content-collection",
        "idealScreenSize": "normal",
        "createdOn": "2018-07-04T05:16:42.318+0000",
        "conceptData": "(9) concepts selected",
        "children": [
          {
            "subject": "English",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
            "language": [
              "English"
            ],
            "mimeType": "application/vnd.ekstep.content-collection",
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                "size": 173657
              }
            },
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
            "gradeLevel": [
              "Class 1"
            ],
            "children": [
              {
                "subject": "English",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "language": [
                  "English"
                ],
                "mimeType": "application/vnd.ekstep.content-collection",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                    "size": 173657
                  }
                },
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "children": [
                  {
                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999198485053441504/dummy.mp4",
                    "subject": "Hindi",
                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999198485053441504/elevator-pitch-bi-hana_1527768940732_do_2123999198485053441504_4.0.ecar",
                    "showNotification": true,
                    "language": [
                      "English"
                    ],
                    "variants": {
                      "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999198485053441504/elevator-pitch-bi-hana_1527768940895_do_2123999198485053441504_4.0_spine.ecar",
                        "size": 24190
                      }
                    },
                    "mimeType": "video/mp4",
                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999198485053441504/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.thumb.jpeg",
                    "gradeLevel": [
                      "Class 1"
                    ],
                    "appId": "sunbird_portal",
                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999198485053441504/dummy.mp4",
                    "contentEncoding": "identity",
                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:41.038+0000",
                    "contentType": "Resource",
                    "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                    "identifier": "do_2123999198485053441504",
                    "audience": [
                      "Learner"
                    ],
                    "visibility": "Default",
                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                    "index": 1,
                    "mediaType": "content",
                    "osId": "org.ekstep.quiz.app",
                    "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                    "prevState": "Live",
                    "lastPublishedOn": "2018-05-31T12:15:40.732+0000",
                    "size": 38058,
                    "concepts": [
                      {
                        "identifier": "LO39",
                        "name": "Akshara Recognition",
                        "objectType": "Concept",
                        "relation": "associatedTo",
                        "description": "Akshara Recognition",
                        "index": null,
                        "status": null,
                        "depth": null,
                        "mimeType": null,
                        "visibility": null,
                        "compatibilityLevel": null
                      }
                    ],
                    "name": "Elevator-Pitch-BI-HANA",
                    "status": "Live",
                    "code": "87dcc49c-e6ab-4830-8c97-61113eeaabb0",
                    "description": "elevator",
                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051856/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.jpeg",
                    "idealScreenSize": "normal",
                    "createdOn": "2017-12-19T05:41:30.882+0000",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2018-05-31T12:15:40.387+0000",
                    "createdFor": [
                      "0123944009325690880",
                      "ORG_001"
                    ],
                    "creator": "bodhi1 user",
                    "os": [
                      "All"
                    ],
                    "pkgVersion": 4,
                    "versionKey": "1527768940387",
                    "idealScreenDensity": "hdpi",
                    "framework": "NCF",
                    "s3Key": "ecar_files/do_2123999198485053441504/elevator-pitch-bi-hana_1527768940732_do_2123999198485053441504_4.0.ecar",
                    "lastSubmittedOn": "2017-12-19T05:42:35.412+0000",
                    "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                    "compatibilityLevel": 1,
                    "board": "CBSE",
                    "resourceType": "Read"
                  },
                  {
                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999141994987521488/dummy.mp4",
                    "subject": "English",
                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999141994987521488/prepare-agile-devops-elevator-pitch-video_1527768938601_do_2123999141994987521488_4.0.ecar",
                    "showNotification": true,
                    "language": [
                      "English"
                    ],
                    "variants": {
                      "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999141994987521488/prepare-agile-devops-elevator-pitch-video_1527768938700_do_2123999141994987521488_4.0_spine.ecar",
                        "size": 50749
                      }
                    },
                    "mimeType": "video/mp4",
                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999141994987521488/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                    "gradeLevel": [
                      "Class 1"
                    ],
                    "appId": "sunbird_portal",
                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999141994987521488/dummy.mp4",
                    "contentEncoding": "identity",
                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:38.881+0000",
                    "contentType": "Resource",
                    "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                    "identifier": "do_2123999141994987521488",
                    "audience": [
                      "Learner"
                    ],
                    "visibility": "Default",
                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                    "index": 2,
                    "mediaType": "content",
                    "osId": "org.ekstep.quiz.app",
                    "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                    "prevState": "Live",
                    "lastPublishedOn": "2018-05-31T12:15:38.601+0000",
                    "size": 64298,
                    "concepts": [
                      {
                        "identifier": "BED30000",
                        "name": "Perspectives_in_Education",
                        "objectType": "Concept",
                        "relation": "associatedTo",
                        "description": null,
                        "index": null,
                        "status": null,
                        "depth": null,
                        "mimeType": null,
                        "visibility": null,
                        "compatibilityLevel": null
                      }
                    ],
                    "name": "PREPARE-Agile-DevOps-Elevator-Pitch-Video",
                    "status": "Live",
                    "code": "ea939c80-d7e9-4d5d-8508-6ee123e13508",
                    "description": "Refer Excel",
                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                    "idealScreenSize": "normal",
                    "createdOn": "2017-12-19T05:30:01.306+0000",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2018-05-31T12:15:38.458+0000",
                    "createdFor": [
                      "0123944009325690880",
                      "ORG_001"
                    ],
                    "creator": "bodhi1 user",
                    "os": [
                      "All"
                    ],
                    "pkgVersion": 4,
                    "versionKey": "1527768938458",
                    "idealScreenDensity": "hdpi",
                    "s3Key": "ecar_files/do_2123999141994987521488/prepare-agile-devops-elevator-pitch-video_1527768938601_do_2123999141994987521488_4.0.ecar",
                    "framework": "NCF",
                    "lastSubmittedOn": "2017-12-19T05:32:22.263+0000",
                    "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                    "compatibilityLevel": 1,
                    "board": "CBSE",
                    "resourceType": "Read"
                  },
                  {
                    "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999168105512961495/dummy.mp4",
                    "subject": "English",
                    "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                    "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999168105512961495/sapfiori_edittest_salescontent_v01_1527768939161_do_2123999168105512961495_5.0.ecar",
                    "showNotification": true,
                    "language": [
                      "English"
                    ],
                    "mimeType": "video/mp4",
                    "variants": {
                      "spine": {
                        "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999168105512961495/sapfiori_edittest_salescontent_v01_1527768939267_do_2123999168105512961495_5.0_spine.ecar",
                        "size": 50722
                      }
                    },
                    "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999168105512961495/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                    "gradeLevel": [
                      "Class 1"
                    ],
                    "appId": "sunbird_portal",
                    "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999168105512961495/dummy.mp4",
                    "contentEncoding": "identity",
                    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:39.442+0000",
                    "contentType": "Resource",
                    "lastUpdatedBy": "Ekstep",
                    "identifier": "do_2123999168105512961495",
                    "audience": [
                      "Learner"
                    ],
                    "visibility": "Default",
                    "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                    "index": 3,
                    "mediaType": "content",
                    "osId": "org.ekstep.quiz.app",
                    "lastPublishedBy": "Ekstep",
                    "prevState": "Live",
                    "lastPublishedOn": "2018-05-31T12:15:39.161+0000",
                    "size": 64271,
                    "concepts": [
                      {
                        "identifier": "BED30000",
                        "name": "Perspectives_in_Education",
                        "objectType": "Concept",
                        "relation": "associatedTo",
                        "description": null,
                        "index": null,
                        "status": null,
                        "depth": null,
                        "mimeType": null,
                        "visibility": null,
                        "compatibilityLevel": null
                      }
                    ],
                    "name": "SAPFiori_EditTest_SalesContent_v01",
                    "publisher": "EkStep",
                    "status": "Live",
                    "code": "3963432a-7012-4263-8ee6-388175d812e6",
                    "description": "Refer Excel",
                    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                    "idealScreenSize": "normal",
                    "createdOn": "2017-12-19T05:35:20.038+0000",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2018-05-31T12:15:38.990+0000",
                    "createdFor": [
                      "0123944009325690880",
                      "ORG_001"
                    ],
                    "creator": "bodhi1 user",
                    "os": [
                      "All"
                    ],
                    "pkgVersion": 5,
                    "versionKey": "1527768938990",
                    "idealScreenDensity": "hdpi",
                    "framework": "NCF",
                    "s3Key": "ecar_files/do_2123999168105512961495/sapfiori_edittest_salescontent_v01_1527768939161_do_2123999168105512961495_5.0.ecar",
                    "lastSubmittedOn": "2017-12-19T05:37:08.341+0000",
                    "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                    "compatibilityLevel": 1,
                    "board": "CBSE",
                    "resourceType": "Read"
                  }
                ],
                "appId": "sunbird_portal",
                "contentEncoding": "gzip",
                "mimeTypesCount": "{\"video/mp4\":3}",
                "contentType": "Collection",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:40.213+0000",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999194039664641503",
                "audience": [
                  "Learner"
                ],
                "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/do_2123999194039664641503toc.json",
                "visibility": "Default",
                "contentTypesCount": "{\"Resource\":3}",
                "childNodes": [
                  "do_2123999198485053441504",
                  "do_2123999168105512961495",
                  "do_2123999141994987521488"
                ],
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 1,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "size": 173657,
                "lastPublishedOn": "2018-07-03T10:24:39.048+0000",
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  },
                  {
                    "identifier": "LO39",
                    "name": "Akshara Recognition",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": "Akshara Recognition",
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Elevator Pitch",
                "status": "Live",
                "code": "org.sunbird.fRvqAL",
                "description": "Refer Excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T05:40:36.617+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-07-03T10:24:38.211+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi1user",
                "os": [
                  "All"
                ],
                "pkgVersion": 5,
                "versionKey": "1530613478211",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
                "lastSubmittedOn": "2017-12-19T05:46:17.441+0000",
                "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "leafNodesCount": 3,
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Collection"
              },
            ],
            "appId": "sunbird_portal",
            "contentEncoding": "gzip",
            "mimeTypesCount": "{\"video/mp4\":3}",
            "contentType": "Collection",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:40.213+0000",
            "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
            "identifier": "do_2123999194039664641503",
            "audience": [
              "Learner"
            ],
            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999194039664641503/artifact/do_2123999194039664641503toc.json",
            "visibility": "Default",
            "contentTypesCount": "{\"Resource\":3}",
            "childNodes": [
              "do_2123999198485053441504",
              "do_2123999168105512961495",
              "do_2123999141994987521488"
            ],
            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
            "index": 1,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
            "prevState": "Live",
            "size": 173657,
            "lastPublishedOn": "2018-07-03T10:24:39.048+0000",
            "concepts": [
              {
                "identifier": "BED30000",
                "name": "Perspectives_in_Education",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              },
              {
                "identifier": "LO39",
                "name": "Akshara Recognition",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": "Akshara Recognition",
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "Elevator Pitch",
            "status": "Live",
            "code": "org.sunbird.fRvqAL",
            "description": "Refer Excel",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
            "idealScreenSize": "normal",
            "createdOn": "2017-12-19T05:40:36.617+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-07-03T10:24:38.211+0000",
            "createdFor": [
              "0123944009325690880",
              "ORG_001"
            ],
            "creator": "bodhi1user",
            "os": [
              "All"
            ],
            "pkgVersion": 5,
            "versionKey": "1530613478211",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_2123999194039664641503/elevator-pitch_1530613479059_do_2123999194039664641503_5.0_spine.ecar",
            "lastSubmittedOn": "2017-12-19T05:46:17.441+0000",
            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
            "leafNodesCount": 3,
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Collection"
          },
          {
            "subject": "English",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
            "language": [
              "English"
            ],
            "mimeType": "application/vnd.ekstep.content-collection",
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                "size": 349219
              }
            },
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
            "gradeLevel": [
              "Class 1"
            ],
            "children": [
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "mimeType": "video/mp4",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942372_do_2123999313255956481519_4.0_spine.ecar",
                    "size": 50732
                  }
                },
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999313255956481519/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:42.545+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "identifier": "do_2123999313255956481519",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 1,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:42.262+0000",
                "size": 64281,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Infosys_Oracle_Practice_Nov-17",
                "status": "Live",
                "code": "28491834-2b1d-4358-ad8e-c82c18a6cc5c",
                "description": "Refer Excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:04:51.894+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:42.142+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi1 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768942142",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:06:50.023+0000",
                "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768943013_do_2123999338861608961523_4.0_spine.ecar",
                    "size": 50724
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999338861608961523/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.175+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999338861608961523",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 2,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:42.916+0000",
                "size": 64273,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle Analytics Cloud",
                "status": "Live",
                "code": "4ab22ae6-43e2-4cda-92b1-a8395a52aa0e",
                "description": "Refer Excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:10:04.463+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:42.648+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768942648",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:11:31.675+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "mimeType": "video/mp4",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943660_do_2123999359659786241526_4.0_spine.ecar",
                    "size": 50731
                  }
                },
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999359659786241526/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.802+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999359659786241526",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 3,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:43.523+0000",
                "size": 64280,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle HCM Systems - Sales",
                "status": "Live",
                "code": "3914a9a4-27a5-4594-b0c6-2bd18ad65a05",
                "description": "Refer Excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:14:18.347+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:43.326+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768943326",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:16:41.416+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768945208_do_2123999393908736001531_4.0_spine.ecar",
                    "size": 50742
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999393908736001531/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:45.341+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999393908736001531",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 4,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:44.992+0000",
                "size": 64292,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle Mktg content for Sales team-OPN",
                "status": "Live",
                "code": "1e06c8e8-8bc9-4dab-be33-860a0ecdc936",
                "description": "refer excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:21:16.425+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:44.708+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768944708",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2017-12-19T06:23:21.559+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945837_do_2123999412799979521537_4.0_spine.ecar",
                    "size": 50741
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999412799979521537/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.001+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999412799979521537",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 5,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:45.654+0000",
                "size": 64290,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle_Business Intelligence on Cloud",
                "status": "Live",
                "code": "38963e57-d933-4009-9e50-a783c1cc2db8",
                "description": "refer excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:25:07.031+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:45.540+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768945540",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2017-12-19T06:26:49.532+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946366_do_2123999426959196161540_4.0_spine.ecar",
                    "size": 50723
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999426959196161540/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.532+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999426959196161540",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 6,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:46.224+0000",
                "size": 64272,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "SiebelOpenUI_SalesPortal",
                "status": "Live",
                "code": "acb90aba-2513-4763-9d3c-05a66ccb4b81",
                "description": "refer excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:27:59.873+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:46.093+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768946093",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:29:48.609+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              }
            ],
            "appId": "sunbird_portal",
            "contentEncoding": "gzip",
            "mimeTypesCount": "{\"video/mp4\":6}",
            "contentType": "Collection",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:42.182+0000",
            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
            "identifier": "do_2123999507628441601548",
            "audience": [
              "Learner"
            ],
            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/do_2123999507628441601548toc.json",
            "visibility": "Default",
            "contentTypesCount": "{\"Resource\":6}",
            "childNodes": [
              "do_2123999359659786241526",
              "do_2123999426959196161540",
              "do_2123999393908736001531",
              "do_2123999412799979521537",
              "do_2123999313255956481519",
              "do_2123999338861608961523"
            ],
            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
            "index": 2,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
            "prevState": "Live",
            "size": 349219,
            "lastPublishedOn": "2018-07-03T10:24:41.409+0000",
            "concepts": [
              {
                "identifier": "BED30000",
                "name": "Perspectives_in_Education",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "Oracle",
            "status": "Live",
            "code": "org.sunbird.GUPfUb",
            "description": "Refer Excel",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
            "idealScreenSize": "normal",
            "createdOn": "2017-12-19T06:44:24.605+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-07-03T10:24:40.976+0000",
            "createdFor": [
              "0123944009325690880",
              "ORG_001"
            ],
            "creator": "bodhi1user",
            "os": [
              "All"
            ],
            "pkgVersion": 6,
            "versionKey": "1530613480976",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
            "lastSubmittedOn": "2017-12-19T07:06:48.059+0000",
            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
            "leafNodesCount": 6,
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Collection"
          },
          {
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
            "keywords": [
              "Ch 6"
            ],
            "subject": "English",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
            "channel": "in.ekstep",
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769835084_do_2125139721311354881514_2.0_spine.ecar",
                "size": 14630
              }
            },
            "mimeType": "video/mp4",
            "gradeLevel": [
              "Class 1"
            ],
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125139721311354881514/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.thumb.jpeg",
            "appId": "staging.diksha.portal",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
            "contentEncoding": "identity",
            "contentType": "Resource",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:30:35.214+0000",
            "lastUpdatedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
            "identifier": "do_2125139721311354881514",
            "audience": [
              "Learner"
            ],
            "publishChecklist": [
              "No Hate speech, Abuse, Violence, Profanity",
              "No Sexual content, Nudity or Vulgarity",
              "No Discrimination or Defamation",
              "Is suitable for children",
              "Appropriate Title, Description",
              "Correct Board, Grade, Subject, Medium",
              "Appropriate tags such as Resource Type, Concepts",
              "Relevant Keywords",
              "Content plays correctly",
              "Can see the content clearly on Desktop and App",
              "Audio (if any) is clear and easy to understand",
              "No Spelling mistakes in the text",
              "Language is simple to understand"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "index": 3,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
            "tags": [
              "Ch 6"
            ],
            "prevState": "Live",
            "lastPublishedOn": "2018-05-31T12:30:32.871+0000",
            "size": 25745705,
            "concepts": [
              {
                "identifier": "AI33",
                "name": "Perceptron",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "Ch 6",
            "status": "Live",
            "code": "8607dab1-b9a6-414c-81c6-cad63ce6ad5a",
            "description": "Ch 6",
            "medium": "English",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051866/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.jpeg",
            "idealScreenSize": "normal",
            "createdOn": "2018-05-29T09:01:28.663+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-05-31T12:30:32.685+0000",
            "createdFor": [
              "0125053927550320640"
            ],
            "creator": "Ekstep User2",
            "os": [
              "All"
            ],
            "pkgVersion": 2,
            "versionKey": "1527769832685",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
            "lastSubmittedOn": "2018-05-29T09:03:17.617+0000",
            "createdBy": "1c0d0dc1-5e47-4ca8-894a-4e55a3292eb1",
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Learn"
          },
          {
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123993503202263041424/dummy.mp4",
            "subject": "English",
            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123993503202263041424/business-critical-application-uptime-with-infoscale_1513593259017_do_2123993503202263041424_1.0.ecar",
            "showNotification": true,
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123993503202263041424/business-critical-application-uptime-with-infoscale_1513593259215_do_2123993503202263041424_1.0_spine.ecar",
                "size": 24012
              }
            },
            "mimeType": "video/mp4",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123993503202263041424/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.thumb.jpeg",
            "gradeLevel": [
              "Class 1"
            ],
            "appId": "sunbird_portal",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123993503202263041424/dummy.mp4",
            "contentEncoding": "identity",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2017-12-18T10:34:19.440+0000",
            "contentType": "Resource",
            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
            "identifier": "do_2123993503202263041424",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
            "index": 4,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
            "lastPublishedOn": "2017-12-18T10:34:19.016+0000",
            "size": 37878,
            "concepts": [
              {
                "identifier": "LO39",
                "name": "Akshara Recognition",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": "Akshara Recognition",
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "Business-critical Application Uptime with InfoScale",
            "status": "Live",
            "code": "2d3316a2-8c82-4be4-8cd5-25cd2dabe670",
            "description": "Business",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051856/artifact/b5c2ff92ab5512754a24b7ed0a09e97f_1478082514640.jpeg",
            "idealScreenSize": "normal",
            "createdOn": "2017-12-18T10:22:48.387+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2017-12-18T10:34:17.328+0000",
            "createdFor": [
              "0123944009325690880",
              "ORG_001"
            ],
            "creator": "bodhi1 user",
            "os": [
              "All"
            ],
            "pkgVersion": 1,
            "versionKey": "1513593259440",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2123993503202263041424/business-critical-application-uptime-with-infoscale_1513593259017_do_2123993503202263041424_1.0.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2017-12-18T10:24:29.487+0000",
            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Read"
          },
          {
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/ecml/do_21244184257548288011854-latest",
            "code": "org.sunbird.lyLyeF",
            "subject": "English",
            "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21244184257548288011854/study3090_1518779734564_do_21244184257548288011854_1.0.ecar",
            "description": "descr",
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21244184257548288011854/study3090_1518779734734_do_21244184257548288011854_1.0_spine.ecar",
                "size": 54386
              }
            },
            "mimeType": "application/vnd.ekstep.ecml-archive",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123864597732311041149/artifact/asder0_123456_1512019015777.jpg",
            "idealScreenSize": "normal",
            "createdOn": "2018-02-16T11:13:31.264+0000",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21244184257548288011854/artifact/asder0_123456_1512019015777.thumb.jpg",
            "gradeLevel": [
              "Class 1"
            ],
            "appId": "sunbird_portal",
            "contentDisposition": "inline",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_21244184257548288011854/artifact/1518779734293_do_21244184257548288011854.zip",
            "contentEncoding": "gzip",
            "lastUpdatedOn": "2018-02-16T11:15:32.954+0000",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-02-16T11:15:34.964+0000",
            "contentType": "Resource",
            "lastUpdatedBy": "18150cf9-b839-4ccd-956a-66e359f22278",
            "identifier": "do_21244184257548288011854",
            "audience": [
              "Learner"
            ],
            "createdFor": [
              "01232003237608652844",
              "01231711180382208027"
            ],
            "creator": "Test12 test456",
            "os": [
              "All"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "index": 5,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "18150cf9-b839-4ccd-956a-66e359f22278",
            "pkgVersion": 1,
            "versionKey": "1518779734964",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_21244184257548288011854/study3090_1518779734564_do_21244184257548288011854_1.0.ecar",
            "framework": "NCF",
            "size": 70802,
            "lastPublishedOn": "2018-02-16T11:15:34.564+0000",
            "lastSubmittedOn": "2018-02-16T11:14:48.598+0000",
            "concepts": [
              {
                "identifier": "BIO10000",
                "name": "Animals",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "createdBy": "4c4530df-0d4f-42a5-bd91-0366716c8c24",
            "compatibilityLevel": 2,
            "name": "Study3090",
            "board": "CBSE",
            "status": "Live",
            "resourceType": "Read"
          },
          {
            "previewUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
            "subject": "English",
            "channel": "012315809814749184151",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
            "showNotification": true,
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133565_do_2124347141266391041106_4.0_spine.ecar",
                "size": 7370
              }
            },
            "mimeType": "video/x-youtube",
            "gradeLevel": [
              "Class 1"
            ],
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124006248428994561712/artifact/download_1513748149940.jpg",
            "appId": "staging.sunbird.portal",
            "contentEncoding": "identity",
            "artifactUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
            "contentType": "Resource",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:18:53.708+0000",
            "lastUpdatedBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "identifier": "do_2124347141266391041106",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "index": 6,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "pragma": [
              "external"
            ],
            "prevState": "Live",
            "size": 7369,
            "lastPublishedOn": "2018-05-31T12:18:53.481+0000",
            "concepts": [
              {
                "identifier": "LO39",
                "name": "Akshara Recognition",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": "Akshara Recognition",
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "rr_youtube",
            "status": "Live",
            "code": "0b373b56-ca9d-4509-99b3-2eb5eb6d0e5c",
            "flags": [
              ""
            ],
            "description": "xcvbnhjmkl;",
            "lastFlaggedOn": "2018-06-09T11:54:11.102+0000",
            "idealScreenSize": "normal",
            "flaggedBy": [
              "659b011a-06ec-4107-84ad-955e16b0a48a"
            ],
            "createdOn": "2018-02-06T09:30:39.287+0000",
            "contentDisposition": "online",
            "lastUpdatedOn": "2018-06-12T09:20:04.009+0000",
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "ihn User 12345",
            "os": [
              "All"
            ],
            "pkgVersion": 4,
            "versionKey": "1528795204009",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2018-02-06T09:35:44.933+0000",
            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "compatibilityLevel": 4,
            "board": "CBSE",
            "resourceType": "Read"
          },
          {
            "previewUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
            "subject": "English",
            "channel": "012315809814749184151",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
            "showNotification": true,
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418523_do_2124665501932503041352_4.0_spine.ecar",
                "size": 5466
              }
            },
            "mimeType": "video/x-youtube",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124665501932503041352/artifact/1-1_1485252935201.thumb.png",
            "gradeLevel": [
              "Class 1"
            ],
            "appId": "sunbird_portal",
            "artifactUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
            "contentEncoding": "identity",
            "contentType": "Resource",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:23:38.784+0000",
            "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "identifier": "do_2124665501932503041352",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "index": 7,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "pragma": [
              "external"
            ],
            "prevState": "Live",
            "license": "Standard YouTube License",
            "lastPublishedOn": "2018-05-31T12:23:38.450+0000",
            "size": 5466,
            "concepts": [
              {
                "identifier": "AI35",
                "name": "Softmax",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "subrat",
            "status": "Live",
            "code": "1e95ae1b-117d-47aa-a41c-1bd740386111",
            "description": "hii",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
            "idealScreenSize": "normal",
            "createdOn": "2018-03-23T09:01:17.886+0000",
            "contentDisposition": "online",
            "lastUpdatedOn": "2018-05-31T12:23:38.355+0000",
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "Telemetry User",
            "os": [
              "All"
            ],
            "pkgVersion": 4,
            "versionKey": "1527769418355",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2018-03-23T09:02:52.626+0000",
            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "compatibilityLevel": 4,
            "board": "CBSE",
            "resourceType": "Play"
          }
        ],
        "contentDisposition": "inline",
        "contentEncoding": "gzip",
        "lastUpdatedOn": "2018-07-04T05:16:42.318+0000",
        "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-04T05:23:05.612+0000",
        "contentType": "TextBookUnit",
        "identifier": "do_2125393420477890561264",
        "audience": [
          "Learner"
        ],
        "os": [
          "All"
        ],
        "visibility": "Parent",
        "index": 1,
        "mediaType": "content",
        "osId": "org.ekstep.launcher",
        "pkgVersion": 1,
        "versionKey": "1530681402318",
        "tags": [
          "cewecewcewcewwe"
        ],
        "idealScreenDensity": "hdpi",
        "s3Key": "ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
        "lastPublishedOn": "2018-07-04T05:23:05.076+0000",
        "size": 623898,
        "concepts": [
          {
            "identifier": "AI33",
            "name": "Perceptron",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI35",
            "name": "Softmax",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI12",
            "name": "Regression_Analysis",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI11",
            "name": "Support_Vector_Machine",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI15",
            "name": "Principal_Component_Analysis",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI16",
            "name": "Stochastic_Gradient_Descent",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI13",
            "name": "Supervised_Learning",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI37",
            "name": "RELU",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI14",
            "name": "Unsupervised_Learning",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          }
        ],
        "compatibilityLevel": 1,
        "name": "BookBook12345",
        "status": "Live"
      },
      {
        "code": "4433c1c0-db35-4da3-98c7-e755d17418e1",
        "keywords": [
          "cewecewcewcewwe"
        ],
        "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
        "description": "dewqewwecew",
        "language": [
          "English"
        ],
        "variants": {
          "spine": {
            "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
            "size": 623898
          }
        },
        "mimeType": "application/vnd.ekstep.content-collection",
        "idealScreenSize": "normal",
        "createdOn": "2018-07-04T05:16:42.318+0000",
        "conceptData": "(9) concepts selected",
        "children": [
          {
            "subject": "English",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
            "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
            "language": [
              "English"
            ],
            "mimeType": "application/vnd.ekstep.content-collection",
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
                "size": 349219
              }
            },
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
            "gradeLevel": [
              "Class 1"
            ],
            "children": [
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "mimeType": "video/mp4",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942372_do_2123999313255956481519_4.0_spine.ecar",
                    "size": 50732
                  }
                },
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999313255956481519/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999313255956481519/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:42.545+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "identifier": "do_2123999313255956481519",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 1,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:42.262+0000",
                "size": 64281,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Infosys_Oracle_Practice_Nov-17",
                "status": "Live",
                "code": "28491834-2b1d-4358-ad8e-c82c18a6cc5c",
                "description": "Refer Excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:04:51.894+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:42.142+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi1 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768942142",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999313255956481519/infosys_oracle_practice_nov-17_1527768942263_do_2123999313255956481519_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:06:50.023+0000",
                "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768943013_do_2123999338861608961523_4.0_spine.ecar",
                    "size": 50724
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999338861608961523/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999338861608961523/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.175+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999338861608961523",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 2,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:42.916+0000",
                "size": 64273,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle Analytics Cloud",
                "status": "Live",
                "code": "4ab22ae6-43e2-4cda-92b1-a8395a52aa0e",
                "description": "Refer Excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:10:04.463+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:42.648+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768942648",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999338861608961523/oracle-analytics-cloud_1527768942917_do_2123999338861608961523_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:11:31.675+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "mimeType": "video/mp4",
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943660_do_2123999359659786241526_4.0_spine.ecar",
                    "size": 50731
                  }
                },
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999359659786241526/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999359659786241526/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:43.802+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999359659786241526",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 3,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:43.523+0000",
                "size": 64280,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle HCM Systems - Sales",
                "status": "Live",
                "code": "3914a9a4-27a5-4594-b0c6-2bd18ad65a05",
                "description": "Refer Excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:14:18.347+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:43.326+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768943326",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999359659786241526/oracle-hcm-systems-sales_1527768943523_do_2123999359659786241526_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:16:41.416+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768945208_do_2123999393908736001531_4.0_spine.ecar",
                    "size": 50742
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999393908736001531/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999393908736001531/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:45.341+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999393908736001531",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 4,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:44.992+0000",
                "size": 64292,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle Mktg content for Sales team-OPN",
                "status": "Live",
                "code": "1e06c8e8-8bc9-4dab-be33-860a0ecdc936",
                "description": "refer excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:21:16.425+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:44.708+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768944708",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2123999393908736001531/oracle-mktg-content-for-sales-team-opn_1527768944992_do_2123999393908736001531_4.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2017-12-19T06:23:21.559+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945837_do_2123999412799979521537_4.0_spine.ecar",
                    "size": 50741
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999412799979521537/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999412799979521537/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.001+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999412799979521537",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 5,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:45.654+0000",
                "size": 64290,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "Oracle_Business Intelligence on Cloud",
                "status": "Live",
                "code": "38963e57-d933-4009-9e50-a783c1cc2db8",
                "description": "refer excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:25:07.031+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:45.540+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768945540",
                "idealScreenDensity": "hdpi",
                "s3Key": "ecar_files/do_2123999412799979521537/oracle_business-intelligence-on-cloud_1527768945654_do_2123999412799979521537_4.0.ecar",
                "framework": "NCF",
                "lastSubmittedOn": "2017-12-19T06:26:49.532+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              },
              {
                "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                "subject": "English",
                "channel": "b00bc992ef25f1a9a8d63291e20efc8d",
                "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                "showNotification": true,
                "language": [
                  "English"
                ],
                "variants": {
                  "spine": {
                    "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946366_do_2123999426959196161540_4.0_spine.ecar",
                    "size": 50723
                  }
                },
                "mimeType": "video/mp4",
                "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999426959196161540/artifact/beee6757847b84a1e41ce827ae02ccc7_1477485749628.thumb.jpeg",
                "gradeLevel": [
                  "Class 1"
                ],
                "appId": "sunbird_portal",
                "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2123999426959196161540/dummy.mp4",
                "contentEncoding": "identity",
                "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:15:46.532+0000",
                "contentType": "Resource",
                "lastUpdatedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "identifier": "do_2123999426959196161540",
                "audience": [
                  "Learner"
                ],
                "visibility": "Default",
                "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
                "index": 6,
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "lastPublishedBy": "0b174e4f-eff1-44e9-b15e-415787470456",
                "prevState": "Live",
                "lastPublishedOn": "2018-05-31T12:15:46.224+0000",
                "size": 64272,
                "concepts": [
                  {
                    "identifier": "BED30000",
                    "name": "Perspectives_in_Education",
                    "objectType": "Concept",
                    "relation": "associatedTo",
                    "description": null,
                    "index": null,
                    "status": null,
                    "depth": null,
                    "mimeType": null,
                    "visibility": null,
                    "compatibilityLevel": null
                  }
                ],
                "name": "SiebelOpenUI_SalesPortal",
                "status": "Live",
                "code": "acb90aba-2513-4763-9d3c-05a66ccb4b81",
                "description": "refer excel",
                "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
                "idealScreenSize": "normal",
                "createdOn": "2017-12-19T06:27:59.873+0000",
                "contentDisposition": "inline",
                "lastUpdatedOn": "2018-05-31T12:15:46.093+0000",
                "createdFor": [
                  "0123944009325690880",
                  "ORG_001"
                ],
                "creator": "bodhi2 user",
                "os": [
                  "All"
                ],
                "pkgVersion": 4,
                "versionKey": "1527768946093",
                "idealScreenDensity": "hdpi",
                "framework": "NCF",
                "s3Key": "ecar_files/do_2123999426959196161540/siebelopenui_salesportal_1527768946224_do_2123999426959196161540_4.0.ecar",
                "lastSubmittedOn": "2017-12-19T06:29:48.609+0000",
                "createdBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
                "compatibilityLevel": 1,
                "board": "CBSE",
                "resourceType": "Read"
              }
            ],
            "appId": "sunbird_portal",
            "contentEncoding": "gzip",
            "mimeTypesCount": "{\"video/mp4\":6}",
            "contentType": "Collection",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-03T10:24:42.182+0000",
            "lastUpdatedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
            "identifier": "do_2123999507628441601548",
            "audience": [
              "Learner"
            ],
            "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2123999507628441601548/artifact/do_2123999507628441601548toc.json",
            "visibility": "Default",
            "contentTypesCount": "{\"Resource\":6}",
            "childNodes": [
              "do_2123999359659786241526",
              "do_2123999426959196161540",
              "do_2123999393908736001531",
              "do_2123999412799979521537",
              "do_2123999313255956481519",
              "do_2123999338861608961523"
            ],
            "consumerId": "78de9e88-9263-4505-ae64-a06fd23744ca",
            "index": 2,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "b32fb1b6-e579-4406-881b-79b09609a1e5",
            "prevState": "Live",
            "size": 349219,
            "lastPublishedOn": "2018-07-03T10:24:41.409+0000",
            "concepts": [
              {
                "identifier": "BED30000",
                "name": "Perspectives_in_Education",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "Oracle",
            "status": "Live",
            "code": "org.sunbird.GUPfUb",
            "description": "Refer Excel",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/beee6757847b84a1e41ce827ae02ccc7_1477485749628.jpeg",
            "idealScreenSize": "normal",
            "createdOn": "2017-12-19T06:44:24.605+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-07-03T10:24:40.976+0000",
            "createdFor": [
              "0123944009325690880",
              "ORG_001"
            ],
            "creator": "bodhi1user",
            "os": [
              "All"
            ],
            "pkgVersion": 6,
            "versionKey": "1530613480976",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_2123999507628441601548/oracle_1530613481442_do_2123999507628441601548_6.0_spine.ecar",
            "lastSubmittedOn": "2017-12-19T07:06:48.059+0000",
            "createdBy": "0b174e4f-eff1-44e9-b15e-415787470456",
            "leafNodesCount": 6,
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Collection"
          },
          {
            "previewUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
            "keywords": [
              "Ch 6"
            ],
            "subject": "English",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
            "channel": "in.ekstep",
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2125139721311354881514/ch-6_1527769835084_do_2125139721311354881514_2.0_spine.ecar",
                "size": 14630
              }
            },
            "mimeType": "video/mp4",
            "gradeLevel": [
              "Class 1"
            ],
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125139721311354881514/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.thumb.jpeg",
            "appId": "staging.diksha.portal",
            "artifactUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/do_2125139721311354881514/amy-cuddy-more-confidence-in-2-minutes-condensed-talk.mp4",
            "contentEncoding": "identity",
            "contentType": "Resource",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:30:35.214+0000",
            "lastUpdatedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
            "identifier": "do_2125139721311354881514",
            "audience": [
              "Learner"
            ],
            "publishChecklist": [
              "No Hate speech, Abuse, Violence, Profanity",
              "No Sexual content, Nudity or Vulgarity",
              "No Discrimination or Defamation",
              "Is suitable for children",
              "Appropriate Title, Description",
              "Correct Board, Grade, Subject, Medium",
              "Appropriate tags such as Resource Type, Concepts",
              "Relevant Keywords",
              "Content plays correctly",
              "Can see the content clearly on Desktop and App",
              "Audio (if any) is clear and easy to understand",
              "No Spelling mistakes in the text",
              "Language is simple to understand"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "index": 3,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "a0ccd498-750e-479e-8556-903b3b9c32bf",
            "tags": [
              "Ch 6"
            ],
            "prevState": "Live",
            "lastPublishedOn": "2018-05-31T12:30:32.871+0000",
            "size": 25745705,
            "concepts": [
              {
                "identifier": "AI33",
                "name": "Perceptron",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "Ch 6",
            "status": "Live",
            "code": "8607dab1-b9a6-414c-81c6-cad63ce6ad5a",
            "description": "Ch 6",
            "medium": "English",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_20051866/artifact/c01d727c0adf4782a959fd96613b0fc2_1478084692560.jpeg",
            "idealScreenSize": "normal",
            "createdOn": "2018-05-29T09:01:28.663+0000",
            "contentDisposition": "inline",
            "lastUpdatedOn": "2018-05-31T12:30:32.685+0000",
            "createdFor": [
              "0125053927550320640"
            ],
            "creator": "Ekstep User2",
            "os": [
              "All"
            ],
            "pkgVersion": 2,
            "versionKey": "1527769832685",
            "idealScreenDensity": "hdpi",
            "framework": "NCF",
            "s3Key": "ecar_files/do_2125139721311354881514/ch-6_1527769832872_do_2125139721311354881514_2.0.ecar",
            "lastSubmittedOn": "2018-05-29T09:03:17.617+0000",
            "createdBy": "1c0d0dc1-5e47-4ca8-894a-4e55a3292eb1",
            "compatibilityLevel": 1,
            "board": "CBSE",
            "resourceType": "Learn"
          },
          {
            "previewUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
            "subject": "English",
            "channel": "012315809814749184151",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
            "showNotification": true,
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124347141266391041106/rr_youtube_1527769133565_do_2124347141266391041106_4.0_spine.ecar",
                "size": 7370
              }
            },
            "mimeType": "video/x-youtube",
            "gradeLevel": [
              "Class 1"
            ],
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124006248428994561712/artifact/download_1513748149940.jpg",
            "appId": "staging.sunbird.portal",
            "contentEncoding": "identity",
            "artifactUrl": "https://www.youtube.com/watch?v=bmECR_eHN1k",
            "contentType": "Resource",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:18:53.708+0000",
            "lastUpdatedBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "identifier": "do_2124347141266391041106",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "index": 6,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "pragma": [
              "external"
            ],
            "prevState": "Live",
            "size": 7369,
            "lastPublishedOn": "2018-05-31T12:18:53.481+0000",
            "concepts": [
              {
                "identifier": "LO39",
                "name": "Akshara Recognition",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": "Akshara Recognition",
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "rr_youtube",
            "status": "Live",
            "code": "0b373b56-ca9d-4509-99b3-2eb5eb6d0e5c",
            "flags": [
              ""
            ],
            "description": "xcvbnhjmkl;",
            "lastFlaggedOn": "2018-06-09T11:54:11.102+0000",
            "idealScreenSize": "normal",
            "flaggedBy": [
              "659b011a-06ec-4107-84ad-955e16b0a48a"
            ],
            "createdOn": "2018-02-06T09:30:39.287+0000",
            "contentDisposition": "online",
            "lastUpdatedOn": "2018-06-12T09:20:04.009+0000",
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "ihn User 12345",
            "os": [
              "All"
            ],
            "pkgVersion": 4,
            "versionKey": "1528795204009",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2124347141266391041106/rr_youtube_1527769133481_do_2124347141266391041106_4.0.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2018-02-06T09:35:44.933+0000",
            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "compatibilityLevel": 4,
            "board": "CBSE",
            "resourceType": "Read"
          },
          {
            "previewUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
            "subject": "English",
            "channel": "012315809814749184151",
            "downloadUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
            "showNotification": true,
            "language": [
              "English"
            ],
            "variants": {
              "spine": {
                "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124665501932503041352/subrat_1527769418523_do_2124665501932503041352_4.0_spine.ecar",
                "size": 5466
              }
            },
            "mimeType": "video/x-youtube",
            "appIcon": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2124665501932503041352/artifact/1-1_1485252935201.thumb.png",
            "gradeLevel": [
              "Class 1"
            ],
            "appId": "sunbird_portal",
            "artifactUrl": "https://www.youtube.com/watch?v=S78DMLYb8Pw",
            "contentEncoding": "identity",
            "contentType": "Resource",
            "sYS_INTERNAL_LAST_UPDATED_ON": "2018-05-31T12:23:38.784+0000",
            "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "identifier": "do_2124665501932503041352",
            "audience": [
              "Learner"
            ],
            "visibility": "Default",
            "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
            "index": 7,
            "mediaType": "content",
            "osId": "org.ekstep.quiz.app",
            "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
            "pragma": [
              "external"
            ],
            "prevState": "Live",
            "license": "Standard YouTube License",
            "lastPublishedOn": "2018-05-31T12:23:38.450+0000",
            "size": 5466,
            "concepts": [
              {
                "identifier": "AI35",
                "name": "Softmax",
                "objectType": "Concept",
                "relation": "associatedTo",
                "description": null,
                "index": null,
                "status": null,
                "depth": null,
                "mimeType": null,
                "visibility": null,
                "compatibilityLevel": null
              }
            ],
            "name": "subrat",
            "status": "Live",
            "code": "1e95ae1b-117d-47aa-a41c-1bd740386111",
            "description": "hii",
            "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/assets/1-1_1485252935201.png",
            "idealScreenSize": "normal",
            "createdOn": "2018-03-23T09:01:17.886+0000",
            "contentDisposition": "online",
            "lastUpdatedOn": "2018-05-31T12:23:38.355+0000",
            "createdFor": [
              "01232002070124134414",
              "012315809814749184151"
            ],
            "creator": "Telemetry User",
            "os": [
              "All"
            ],
            "pkgVersion": 4,
            "versionKey": "1527769418355",
            "idealScreenDensity": "hdpi",
            "s3Key": "ecar_files/do_2124665501932503041352/subrat_1527769418450_do_2124665501932503041352_4.0.ecar",
            "framework": "NCF",
            "lastSubmittedOn": "2018-03-23T09:02:52.626+0000",
            "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
            "compatibilityLevel": 4,
            "board": "CBSE",
            "resourceType": "Play"
          }
        ],
        "contentDisposition": "inline",
        "contentEncoding": "gzip",
        "lastUpdatedOn": "2018-07-04T05:16:42.318+0000",
        "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-04T05:23:05.612+0000",
        "contentType": "TextBookUnit",
        "identifier": "do_2125393420477890561264",
        "audience": [
          "Learner"
        ],
        "os": [
          "All"
        ],
        "visibility": "Parent",
        "index": 1,
        "mediaType": "content",
        "osId": "org.ekstep.launcher",
        "pkgVersion": 1,
        "versionKey": "1530681402318",
        "tags": [
          "cewecewcewcewwe"
        ],
        "idealScreenDensity": "hdpi",
        "s3Key": "ecar_files/do_2125393420477890561264/bookbook12345_1530681785232_do_2125393420477890561264_1.0_spine.ecar",
        "lastPublishedOn": "2018-07-04T05:23:05.076+0000",
        "size": 623898,
        "concepts": [
          {
            "identifier": "AI33",
            "name": "Perceptron",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI35",
            "name": "Softmax",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI12",
            "name": "Regression_Analysis",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI11",
            "name": "Support_Vector_Machine",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI15",
            "name": "Principal_Component_Analysis",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI16",
            "name": "Stochastic_Gradient_Descent",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI13",
            "name": "Supervised_Learning",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI37",
            "name": "RELU",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          },
          {
            "identifier": "AI14",
            "name": "Unsupervised_Learning",
            "objectType": "Concept",
            "relation": "associatedTo",
            "description": null,
            "index": null,
            "status": null,
            "depth": null,
            "mimeType": null,
            "visibility": null,
            "compatibilityLevel": null
          }
        ],
        "compatibilityLevel": 1,
        "name": "BookBook12345",
        "status": "Live"
      }
    ],
    "appId": "staging.sunbird.portal",
    "contentEncoding": "gzip",
    "mimeTypesCount": "{\"application/vnd.ekstep.content-collection\":3,\"application/vnd.ekstep.ecml-archive\":1,\"video/x-youtube\":2,\"video/mp4\":11}",
    "contentType": "TextBook",
    "sYS_INTERNAL_LAST_UPDATED_ON": "2018-07-04T05:23:07.463+0000",
    "lastUpdatedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
    "identifier": "do_2125393416328806401261",
    "audience": [
      "Learner"
    ],
    "publishChecklist": [
      "No Hate speech, Abuse, Violence, Profanity",
      "No Sexual content, Nudity or Vulgarity",
      "No Discrimination or Defamation",
      "Is suitable for children",
      "Relevant Keywords",
      "Correct Board, Grade, Subject, Medium",
      "Appropriate Title, Description",
      "Appropriate tags such as Resource Type, Concepts",
      "Content plays correctly",
      "Can see the content clearly on Desktop and App",
      "Audio (if any) is clear and easy to understand",
      "No Spelling mistakes in the text",
      "Language is simple to understand"
    ],
    "toc_url": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125393416328806401261/artifact/do_2125393416328806401261toc.json",
    "visibility": "Default",
    "contentTypesCount": "{\"TextBookUnit\":1,\"Resource\":14,\"Collection\":2}",
    "childNodes": [
      "do_2125139721311354881514",
      "do_2123999359659786241526",
      "do_2123999426959196161540",
      "do_2123999393908736001531",
      "do_2124347141266391041106",
      "do_2123999168105512961495",
      "do_21244184257548288011854",
      "do_2123999313255956481519",
      "do_2123999507628441601548",
      "do_2125393420477890561264",
      "do_2123999198485053441504",
      "do_2123999412799979521537",
      "do_2123999194039664641503",
      "do_2123999141994987521488",
      "do_2123999338861608961523",
      "do_2123993503202263041424",
      "do_2124665501932503041352"
    ],
    "consumerId": "fa271a76-c15a-4aa1-adff-31dd04682a1f",
    "mediaType": "content",
    "osId": "org.ekstep.quiz.app",
    "lastPublishedBy": "68777b59-b28b-4aee-88d6-50d46e4c3509",
    "tags": [
      "vewvrereverre",
      "cewecewcewcewwe"
    ],
    "prevState": "Review",
    "lastPublishedOn": "2018-07-04T05:23:06.437+0000",
    "size": 681101,
    "concepts": [
      {
        "identifier": "AI16",
        "name": "Stochastic_Gradient_Descent",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI13",
        "name": "Supervised_Learning",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI14",
        "name": "Unsupervised_Learning",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI12",
        "name": "Regression_Analysis",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI15",
        "name": "Principal_Component_Analysis",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI37",
        "name": "RELU",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI35",
        "name": "Softmax",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI33",
        "name": "Perceptron",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      },
      {
        "identifier": "AI11",
        "name": "Support_Vector_Machine",
        "objectType": "Concept",
        "relation": "associatedTo",
        "description": null,
        "index": null,
        "status": null,
        "depth": null,
        "mimeType": null,
        "visibility": null,
        "compatibilityLevel": null
      }
    ],
    "name": "BookBook12345",
    "publisher": "cewewcew",
    "status": "Live",
    "code": "org.sunbird.2xBzVr",
    "description": "Untitled Collection",
    "medium": "English",
    "posterImage": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/content/do_2125393430357934081265/artifact/cool-fb-profile-pictures-anonymous-facbook-profile-picture_1530681523277.jpg",
    "publishComment": "",
    "idealScreenSize": "normal",
    "createdOn": "2018-07-04T05:15:51.669+0000",
    "contentDisposition": "inline",
    "lastUpdatedOn": "2018-07-04T05:23:04.964+0000",
    "createdFor": [
      "01232002070124134414",
      "012315809814749184151"
    ],
    "creator": "creator12345 Test",
    "os": [
      "All"
    ],
    "pkgVersion": 1,
    "versionKey": "1530681784964",
    "idealScreenDensity": "hdpi",
    "s3Key": "ecar_files/do_2125393416328806401261/bookbook12345_1530681786772_do_2125393416328806401261_1.0_spine.ecar",
    "framework": "NCF",
    "lastSubmittedOn": "2018-07-04T05:18:58.881+0000",
    "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
    "leafNodesCount": 14,
    "compatibilityLevel": 1,
    "board": "CBSE",
    "resourceType": "Book",
    "orgDetails": {}
  };


  activeContent;

  public activeMimeTypeFilter = ['all'];

  constructor() { }

  ngOnInit() {
    // const flattenDeepContents = this.flattenDeep(this.tocContent5.children);
    // this.activeContent = this.firstNonCollectionContent(flattenDeepContents);

    const letters = [];
    const t = new Hierarchy.Tree();
    const t1 = new Hierarchy.Tree();
    t.root = new Hierarchy.Node("a");
    t.root.add("b");
    t.root.add("c");
    t.root.children[0].add("d");
    console.log('t', t);

    t1.root = new Hierarchy.Node(this.tocContent.name);
    this.buildTree(t1, t1.root, this.tocContent.children);
    // this.tocContent.children.map((item, index) => {

    //   t1.root.add(item.name);
    //   item.children.map((child) => {
    //     t1.root.children[index].add(child.name);
    //   });
    // });

    console.log('t1', t1);
    // t.root.children[0].add("c");

    t.traverseDF(node => {
      letters.push(node.data);
    });


    console.log('letters', letters);
  }


  buildTree(t1, node, data) {
    // data may be - collection or content
    // create a node with given data

    if (data) {
      
      data.map((item, index) => {
        // t1.root = new Hierarchy.Node(data.name);
        node.add(item.name);
        if (item.children && item.children.length) {

          item.children.map((child) => {
            const childNode = node.children[index].add(child.name);

            if (child.children && child.children.length) {
              this.buildTree(t1, childNode, child.children);
            }
          });
        }
      });
    }

  }



  selectedFilter(event) {
    console.log('mimetype filter output : ', event);
    this.activeMimeTypeFilter = event.data.value;
  }
  tocCardClickHandler(event) {
    console.log('tocCardClickHandler', event);
    this.activeContent = event.data;
  }

  private firstNonCollectionContent(contents) {
    console.log("firstNonCollectionContent", contents);
    return contents.find((content) => content.mimeType !== 'application/vnd.ekstep.content-collection');
  }

  private flattenDeep(contents) {
    if (contents) {
      contents = contents.reduce((acc, val) => {
        if (val.children) {
          // const newVal = { ...val };
          // delete newVal['children'];
          acc.push(val);
          // console.log('flattenDeep if--', acc.concat(this.flattenDeep(val.children)));
          return acc.concat(this.flattenDeep(val.children));
        } else {
          // console.log('flattenDeep else--', acc.concat(val));
          return acc.concat(val);
        }
      }, []);

      return contents;
    }
  }

  embedUrl(text) {
    if (text) {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlRegex, '<a href="$1">$1</a>')
    }
  }

  onNoContentAvailable(event) {
    console.log("event no content available", event);
  }





}
