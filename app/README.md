# Code-Challenge

TAPP Code Challenge for Software Engineer Candidates

Name: Tony Hudgins

Email: tonyhudgins@gmail.com

Resume: _link to your resume_

Github: https://github.com/Tonyhudgins/

LinkedIn: https://www.linkedin.com/in/makemachines/

## Intro

This project showcases some of the functionality described in the TAPP code challenge. The project was made on the Expo React-Native platform. While code can be ejected into standalone form, it currently requires the Expo environment to be installed. The advantages are no requirement to load the Android or iOS toolchains and notably the ability to code for iOS on a Windows machine. The downside is no easy ability to include native code outside of libraries shipped with Expo. 

Considering the limited time available to complete this project, it was selected for its less complicated installation and iOS support.

Expo consists of a development library [expo](https://docs.expo.io/versions/latest/workflow/expo-cli/) and client applications for Android and iOS.

## Expo setup

Expo needs to be installed globally for development.  

- Run `npm install -g expo-cli`

Install the Code Challenge package.

- Run `git clone https://github.com/Tonyhudgins/Code-Challenge.git`
- Run `cd Code-Challenge`

## Code Challenge setup

The Code Challenge requires two additional modules to be installed using Expo.

expo-font and expo-constants

- Run `expo install expo-font`
- Run `expo install expo-constants`

You can now build the package using the expo-cli.

- Run `expo start`.

When running Expo a QR code will be displayed in the terminal as well as a localhost: dashboard that is launched as part of the start process.

Android and iOS both have an Expo app in their app stores. Install and open.

On Android launch the Expo app and select Scan QR Code to read the QR code displayed in the terminal and connect to the development machine.

On iOS once the Expo application is installed, the native Camera app must be used to read the QR code which then launches the Expo app and loads the Code-Challenge application.

This was my first React-Native app and much of my time was spent learning react native and how to do things in Expo. Alas, I did not complete several of the challenges. The learning curve was substancial, but what I did write is at least clean. I plan to continue development as an exercise, but will wait to commit to honor the Time Limit.
