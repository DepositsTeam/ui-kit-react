# About Deposits React UI Kit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Storybook](https://storybook.js.org/). This project contains components to allow developers build Fintech based UI elements with less code and at a faster pace.

## Storybook Demo Link

https://ui-kit.deposits.dev/storybook/react

## Figma UI Link
https://www.figma.com/file/Wi9wPkCWJIbzyriC0oKAW9/Deposits-UI-Kit%2FDesign-System

# Getting Started with Deposits React UI Kit
### `npm install @deposits/ui-kit-react`

## Installing Components
Deposits React UI Kit contains components that can be imported one by one:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@deposits/ui-kit-react'

ReactDOM.render(<Button>Deposits Button!</Button>, document.getElementById('root'))
```

## Contributing to Deposits React UI Kit
The component library is still in its alpha testing mode so any and all feedback are highly anticipated and welcome. 

You can contribute either by submitting an issue or by submitting a Pull Request if you want to want to fix an issue or add a new feature to our existing components that we didn't think about. These are the steps for contributing successfully:

### Fork the Repo
The first step to making any contributions to the component library is by forking the repository, so you can work on a clone locally. If you don't know how to check out this [guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
### Run Storybook
After forking and cloning, you'd need to "cd" into your directory and install the dependencies using yarn:

```
$ yarn install
```

After installing the dependencies, you'd need to run storybook to see all the available components and make your updates accordingly:

```
$ yarn run storybook
```

This should run the storybook instance on `http://localhost:6006` on your browser
### Make your updates
At this point you can make your updates, all the code is in the `src` directory and all styles are written in plain CSS to make contribution as easy as possible in this early stage. All updates you make should automatically reflect on Storybook

### Make a Pull Request
After making your awesome change, submit a pull request.

In your pull request, explain to us why you made the contribution, what exactly you changed, how to test them and anything else we may need to know about your contribution.

Once your PR is submitted, it will be possibly merged after a review process.

### Congratulations!
Congrats! You've officially contributed to Deposits' React UI kit!