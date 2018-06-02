# Installing TypeScript in VSCode

Let's see how to install TypeScript in Visual Studio Code.

There are a couple of steps:

1. open Visual Studio Code

2. make sure **Node.js** is installed

You can check it with:

``` sh
node -v
```

3. create a new folder

Make sure to add this folder in a hierarchy of folders that don't have whitespaces in their names (otherwise it will give errors).

Example: `src` folder

4. make sure **TypeScript** is installed

You can check it by running:

``` sh
tsc --v
```

If it's not there, you can install it:

``` sh
npm install -g typescript
```

Depending on the preffered version, update TypeScript.

5. initialize TypeScript

``` sh
tsc --init
```

6. build the file

Press `Ctrl` + `Shift` + `P`

Type **Configure Task**

Choose `tsc: build - tsconfig.json`

This will create a new file called `tasks.json`

7. create a file called: `practice.ts` in the created folder

8. write some TypeScript code in it:

``` ts
function printMessage() : void {
  console.log('Hi, there');
}

printMessage();
```

9. to build, press `Ctrl` + `Shift` + `B`

This will create a new file called `practice.js` which is the transpiled file of the  `practice.ts` file.

10. if you want VSCode to transpile the file automatically when saving, you can choose: `tsc: watch - tsconfig.json` instead.

In this way, every single time you change and save the file, the tranpiled JavaScript file is updated.

11. you can now create an `HTML` file in the same folder, and reference the JavaScript `practice.js` file like you would normally do

``` html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <script src="practice.js"></script>

</head>

<body>

</body>

</html>
```

You can now open it in a browser and practice TypeScript :grinning:

If you need to read more, check the [VSCode documentation](https://code.visualstudio.com/docs/languages/typescript).
