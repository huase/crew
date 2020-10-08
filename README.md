# crew

<a href='https://www.ultraboardgames.com/the-crew/game-rules.php?fbclid=IwAR1yvUP_Ih2lN4K72kViTF0Gd61hDq4sDZCPO5yEUWFPwmZXN8zOehwl2T4'>Game Rules</a>

## Install NPM

### For Mac OS X
- <a href='https://brew.sh/'>Install Homebrew</a>
- Run `brew install npm` to install `npm`

### For Windows
- Download NodeJS from the NodeJS downloads page

## Setup
- Run `git clone git@github.com:huase/crew.git`
- Once cloned, run `cd crew/`
- Run `npm install`
- Run `npm start`

## Testing
- uses [ts-jest](https://www.npmjs.com/package/ts-jest) as testing framework
- `npm t` to run all tests
- `npm t -- <filename>` to test single file
- `npm t -- -t '<testname>` to run single test
