This branch provides data from hardcoded `db.json` file

The server is live on [Render](https://workout-api-9sna.onrender.com)

For now you can checkout the [Routes](https://github.com/muzaffar640/workout/blob/api-with-jason-data/src/v1/routes/workoutRoutes.js) to get the endpoints.

You can checkout the [API Documentations](https://workout-api-9sna.onrender.com/api/v1/docs/). For now the the documentation is added for `getAllWorkout` end point only for setting the template purpose.

### **The main target is to create**

### 1. APIs with authentication,

### 2. Connect with Mongo DB,

### 3. Docs for all APIs,

### 4. Deploy on a live server,

### 5. Build a React Application on top of this.

# 👇👇👇 Workout API Documentation 👇👇👇

This documentation provides details about the Workout API endpoints. Below docs has been generated using chatGPT.

## Base URL

The base URL for all API endpoints is: `https://workout-api-9sna.onrender.com/api/v1`

## Endpoints

### Retrieve all Workouts

- Method: GET
- URL: `/workouts`
- Description: Retrieve all workouts.
- Parameters:
  - `mode` (query parameter, optional): The mode of a workout.
- Responses:
  - 200 OK: Successfully retrieved the workouts.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "OK",
        "data": [Workout Object]
      }
      ```
  - 5XX FAILED: Failed to retrieve the workouts.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "FAILED",
        "data": {
          "error": "Error message"
        }
      }
      ```

### Retrieve a specific Workout

- Method: GET
- URL: `/workouts/{workoutId}`
- Description: Retrieve a specific workout.
- Parameters:
  - `workoutId` (path parameter): ID of the workout to retrieve.
- Responses:
  - 200 OK: Successfully retrieved the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "OK",
        "data": Workout Object
      }
      ```
  - 5XX FAILED: Failed to retrieve the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "FAILED",
        "data": {
          "error": "Error message"
        }
      }
      ```

### Retrieve Records for a Workout

- Method: GET
- URL: `/workouts/{workoutId}/records`
- Description: Retrieve records for a specific workout.
- Parameters:
  - `workoutId` (path parameter): ID of the workout to retrieve records for.
- Responses:
  - 200 OK: Successfully retrieved the records.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "OK",
        "data": [Record Object]
      }
      ```
  - 5XX FAILED: Failed to retrieve the records.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "FAILED",
        "data": {
          "error": "Error message"
        }
      }
      ```

### Create a new Workout

- Method: POST
- URL: `/workouts`
- Description: Create a new workout.
- Request Body: Workout Object
- Responses:
  - 200 OK: Successfully created the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "OK",
        "data": Workout Object
      }
      ```
  - 5XX FAILED: Failed to create the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "FAILED",
        "data": {
          "error": "Error message"
        }
      }
      ```

### Update a specific Workout

- Method: PUT
- URL: `/workouts/{workoutId}`
- Description: Update a specific workout.
- Parameters:
  - `workoutId` (path parameter): ID of the workout to update.
- Request Body: Workout Object
- Responses:
  - 200 OK: Successfully updated the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "OK",
        "data": Workout Object
      }
      ```
  - 5XX FAILED: Failed to update the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "FAILED",
        "data": {
          "error": "Error message"
        }
      }
      ```

### Delete a specific Workout

- Method: DELETE
- URL: `/workouts/{workoutId}`
- Description: Delete a specific workout.
- Parameters:
  - `workoutId` (path parameter): ID of the workout to delete.
- Responses:
  - 200 OK: Successfully deleted the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "OK",
        "data": Workout Object
      }
      ```
  - 5XX FAILED: Failed to delete the workout.
    - Content-Type: application/json
    - Body:
      ```json
      {
        "status": "FAILED",
        "data": {
          "error": "Error message"
        }
      }
      ```
