# RobotICT Number Processor

This project is a simple web application built with Meteor and React. It processes numbers from 1 to 100 and outputs "Robot" if a number is divisible by 3, "ICT" if divisible by 5, and "RobotICT" if divisible by both.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed the latest version of [Meteor](https://www.meteor.com/install).
- You have a Windows/Linux/Mac machine.
- You have read [Meteor's documentation](https://docs.meteor.com/).

## Installing RobotICT Number Processor

To install the RobotICT Number Processor, follow these steps:

1. Clone the repository:
```
git clone https://yourrepositorylink.git
```
2. Navigate to the project directory:
```
cd robotict-app
```
3. Install the dependencies:
```
meteor npm install
```

## Installing RobotICT Number Processor
To use RobotICT Number Processor, follow these steps:

1. Run the application:
 ```
meteor
```
2. Open your web browser and navigate to http://localhost:3000.

Once the application is running, you will see an interface with two input fields to specify the start and end of the number range you wish to process. After entering the desired range, click the "Process Numbers" button to display the results. Each number will be evaluated, and the output will be:
- "Robot" if the number is divisible by 3.
- "ICT" if the number is divisible by 5.
- "RobotICT" if the number is divisible by both 3 and 5.
- The number itself if it is not divisible by either 3 or 5.
