#Understanding the Revealing Module Pattern

This pattern is the same concept as the *module pattern* in that it focuses on public & private methods. The only difference is that the revealing module pattern was engineered as a way to ensure that all methods and variables are kept private until they are explicitly exposed; usually through an object literal returned by the closure from which it's defined. Personally, I like this approach for vanilla JavaScript as it puts a clear emphasis on both the intent of the developer and the module itself.

> "I've used this pattern on projects ranging from 100 to 100,000 lines of code." - Bob Holt

##Advantages
- Cleaner approach for developers

- Supports private data

- Less clutter in the global namespace

- Localization of functions and variables through closures

- The syntax of our scripts are even more consistent

- Explicitly defined public methods and variables which lead to increased readability


##Disadvantages
- Private methods are unaccessible.

  *Some people say that this leads to the inability of unit testing but more often than not, if you're questioning the integrity of a function, it should probably be engineered in such a fashion that exposes the utility of that function publicly, thus making it testable. Given the adaptation of the module pattern by jQuery and their everyday use of QUnit to automate testing, this bullet point isn't really relevant but still listed for documentation purposes.*

- Private methods and functions lose extendability since they are unaccessible (see my comment in the previous bullet point).

- It's harder to patch public methods and variables that are referred to by something private.

##Example

<script src="https://gist.github.com/carldanley/ef95b006eaa08761b0ca.js"></script>


Read the full article in [https://carldanley.com/js-revealing-module-pattern/](https://carldanley.com/js-revealing-module-pattern/)