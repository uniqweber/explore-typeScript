## Explore Typescript

-  first install typescript globally `npm i -g typescript`
-  then create a basic html project
-  then create a `something.ts` file
-  then in the terminal run `tsc --init`
-  this will generate same tsc file named js file
-  then linkup that js file in the html project

### Next Steps:

-  create a folder where your `.ts` file will be stored
-  create a folder where compiled `js` file will be stored
-  Now go to `tsconfig.json` file and find `rootDir` and `outDir`
-  In the `rootDir` specify your ts folder location like `./src/ts`
-  then in the `outDir` specify your js folder location `./src/js`
-  finally in the terminal run `tsc -w` to unable auto compile
-  now initial setup is done. good go Boss ||| Ready |||

### Basic Concepts:

-  if have declare a variable with proper value like `let name = "hello"` it will automatically know the type of my variable. next time if we want change the variable value string to a another formate like `name=32` it will give us a warning `Type 'number' is not assignable to type 'string'`. but but warning will only show in the terminal but browser only run on js. if we ignore the checking then and ```console.log(name)``` then browser will print ```32``` in the console. 
- so moral of the story. if we ignore code editor error then browser will run the js. 
- we have to make sure that. we don't miss any ts editor warning. 

- if we declare a variable without value like ```let name;``` and then typescript don't know the type in the first place. so here user can define any value in this name and any format. if we change after assign then also here ts will not give us error. so must be ensure we don't declare a variable like this. 

