## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Topics
- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind the Scenes of JSX
- Babel & parcel role in JSX
- Components
- Functional Components
- Composing Components 


## Theory Assignment:
- What is `JSX`?
- Superpowers of `JSX`.
- Role of type `attribute` in script tag? What options can I use there?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.


## Coding Assignment:
- Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
    - Create the same element using JSX
    - Create a functional component of the same with JSX
    - Pass attribute into the tag in JSX
    - Composition of Component (Add a component inside another)
    - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a Header Component from scratch using Functional Component with JSX
    - Add a Logo on Left
    - Add a search bar in middle
    - Add User icon on right
    - Add CSS to make it look nice

## References:
- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) 
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)




## 1. What is JSX?

JSX is a syntex extension created by Facebook. It stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

## 2. Superpowers of JSX.

- Easy to maintain
- Secure
- Easy to debug

```
function greeting(user) {
    return <h1>{user}, How are you!!!</h1>;
}
```

## 3. Role of type attribute in script tag? What options can I use there?

The `type` attribute in the script tag defines the type of script that we we want to run inside our app.
`type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.

e.g

```
<script type="text/javascript">
    const a = "Hello";
    const b = "World!";
    console.log(a + " " + b); // Hello World!
</script>
```

- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.

- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.

- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.

- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expession or a variable or an element.
The `{}` can embed a javascript expression or a values inside it.

- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A compoenet is written inside the `{<  />}` expression.

- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no children components.The opening and closing tags are created to include the child components.

e.g.

```
<TitleComponent>
    <ChildComponen1 />
    <ChildComponen2 />
    <ChildComponen3 />
</TitleComponent>