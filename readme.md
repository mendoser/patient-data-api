BELOW IS THE .ENV CONFIG

PORT=6000
MONGODB_URI=mongodb://localhost:27017/patientDataDB
JWT_SECRET=your_jwt_secret_key

INSTRUCTION TO START PROJECT

STEP ONE: SET UP ENIVIROMENT VARIABLES AS ABOVE 
STEP TWO : RUN npm install  
STEP THREE: RUN npm start 


BELOW IS API DOCUMENTATION 


{
	"info": {
		"_postman_id": "6db4c1e8-6431-4692-8ac9-7db1e25e6233",
		"name": "patient clincal data",
		"description": "# 🚀 Get started here\n\nThis template guides you through CRUD operations (GET, POST, PUT, DELETE), variables, and tests.\n\n## 🔖 **How to use this template**\n\n#### **Step 1: Send requests**\n\nRESTful APIs allow you to perform CRUD operations using the POST, GET, PUT, and DELETE HTTP methods.\n\nThis collection contains each of these [request](https://learning.postman.com/docs/sending-requests/requests/) types. Open each request and click \"Send\" to see what happens.\n\n#### **Step 2: View responses**\n\nObserve the response tab for status code (200 OK), response time, and size.\n\n#### **Step 3: Send new Body data**\n\nUpdate or add new data in \"Body\" in the POST request. Typically, Body data is also used in PUT request.\n\n```\n{\n    \"name\": \"Add your name in the body\"\n}\n\n ```\n\n#### **Step 4: Update the variable**\n\nVariables enable you to store and reuse values in Postman. We have created a [variable](https://learning.postman.com/docs/sending-requests/variables/) called `base_url` with the sample request [https://postman-api-learner.glitch.me](https://postman-api-learner.glitch.me). Replace it with your API endpoint to customize this collection.\n\n#### **Step 5: Add tests in the \"Scripts\" tab**\n\nAdding tests to your requests can help you confirm that your API is working as expected. You can write test scripts in JavaScript and view the output in the \"Test Results\" tab.\n\n<img src=\"https://content.pstmn.io/fa30ea0a-373d-4545-a668-e7b283cca343/aW1hZ2UucG5n\" alt=\"\" height=\"1530\" width=\"2162\">\n\n## 💪 Pro tips\n\n- Use folders to group related requests and organize the collection.\n    \n- Add more [scripts](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/) to verify if the API works as expected and execute workflows.\n    \n\n## 💡Related templates\n\n[API testing basics](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9a37a28-055b-49cd-8c7e-97494a21eb54&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  \n[API documentation](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9c28f47-1253-44af-a2f3-20dce4da1f18&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  \n[Authorization methods](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=31a9a6ed-4cdf-4ced-984c-d12c9aec1c27&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "38852684"
	},
	"item": [
		{
			"name": "create provider",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200, 201]);",
							"});",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IjY3MzAwMWY1OWY0ZjI4OTBlNjQ4YmUwYiIsImlhdCI6MTczMTIwMTgwNywiZXhwIjoxNzMxMjA1NDA3fQ.nP39Uz2KY9reIhOr-f84WC2LCBGdeFSc0vHq-lkjDk0",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"username\": \"bose\",\n  \"email\": \"bose@example.com\",\n  \"password\": \"password123\"\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/api/auth/register",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"api",
						"auth",
						"register"
					]
				},
				"description": "This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.\n\nA successful POST request typically returns a `200 OK` or `201 Created` response code."
			},
			"response": []
		},
		{
			"name": "provider login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"username\": \"femi\",\n    \"password\": \"femifemi\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/api/auth/login",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"api",
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "create Patient Info",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IjY3MzAwMWY1OWY0ZjI4OTBlNjQ4YmUwYiIsImlhdCI6MTczMTIwMTgwNywiZXhwIjoxNzMxMjA1NDA3fQ.nP39Uz2KY9reIhOr-f84WC2LCBGdeFSc0vHq-lkjDk0",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"lane\",\n    \"age\": \"44\",\n    \"gender\": \"female\"\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/api/patients",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"api",
						"patients"
					]
				}
			},
			"response": []
		},
		{
			"name": "get patient info",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IjY3MzAwMWY1OWY0ZjI4OTBlNjQ4YmUwYiIsImlhdCI6MTczMTIwMjc2NCwiZXhwIjoxNzMxMjA2MzY0fQ.Wo1mD7g6UiYwnosW_Wk07HF5bhYr5dgyVifW5_m0mw4",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/api/patients/67300efda27728f69a69ee3e",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"api",
						"patients",
						"67300efda27728f69a69ee3e"
					]
				}
			},
			"response": []
		},
		{
			"name": "create critical data for patient",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IjY3MzAwMWY1OWY0ZjI4OTBlNjQ4YmUwYiIsImlhdCI6MTczMTIwMTgwNywiZXhwIjoxNzMxMjA1NDA3fQ.nP39Uz2KY9reIhOr-f84WC2LCBGdeFSc0vHq-lkjDk0",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"type\": \"Blood Pressure\",\n    \"reading\": \"77/85\"\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/api/patients/67300efda27728f69a69ee3e/clinical-data",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"api",
						"patients",
						"67300efda27728f69a69ee3e",
						"clinical-data"
					]
				}
			},
			"response": []
		},
		{
			"name": "get all patients",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IjY3MzAwMWY1OWY0ZjI4OTBlNjQ4YmUwYiIsImlhdCI6MTczMTIwMTgwNywiZXhwIjoxNzMxMjA1NDA3fQ.nP39Uz2KY9reIhOr-f84WC2LCBGdeFSc0vHq-lkjDk0",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/api/patients",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"api",
						"patients"
					]
				}
			},
			"response": []
		},
		{
			"name": "get all critical patients",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm92aWRlciI6IjY3MzAwMWY1OWY0ZjI4OTBlNjQ4YmUwYiIsImlhdCI6MTczMTIwMTgwNywiZXhwIjoxNzMxMjA1NDA3fQ.nP39Uz2KY9reIhOr-f84WC2LCBGdeFSc0vHq-lkjDk0",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/api/patients/critical",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"api",
						"patients",
						"critical"
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "id",
			"value": "1"
		},
		{
			"key": "base_url",
			"value": "https://postman-rest-api-learner.glitch.me/"
		}
	]
}

