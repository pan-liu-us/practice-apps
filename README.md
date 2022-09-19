<div>
  <h1 id="challenge-glossary-app">Challenge: Glossary App</h1>
  <p>Build a single-page app that allows a user to add, edit, and remove words from a personal glossary: key terms and their definitions.</p>
  <h2 id="getting-started">Getting Started</h2>
  <ul>
    <li>Use Express to serve up assets and API responses</li>
    <li>Build your UI using ReactJS and pre-compile your views using Webpack and Babel</li>
    <li>Use MongoDB to store your user data</li>
  </ul>
  <p>Build your Express app inside <code tabindex="0">server.js</code> and your client app inside the client folder.</p>
  <p>For ease of development, be sure to set Babel to watch for changes in your app.js file to recompile those changes immediately. Additionally, be sure to use nodemon to watch for changes in server.js. See the "scripts" section of <code tabindex="0">package.json</code>.</p>
  <h2 id="basic-requirements">Basic Requirements</h2>
  <p>On the home page of your app, users should see a list of previously stored words and their definitions. (For the purposes of development, consider building a seed function to populate the database with some initial values).</p>
  <p>The page should also have a form by which users can add new words and definitions to the list.</p>
  <p>Each entry should display a button to edit or delete the entry. You can choose how you'd like to make the content editable: a pop-up form, in-place edits, populating the existing form with the values.</p>
  <p>A second input should allow the user to search through the entries and filter the results as a result.</p>
  <h2 id="advanced-content">Advanced Content</h2>
  <ul>
    <li>Implement pagination on the client and server. Your server should only return a max of 10 results at a time. Your client should be able to make GET requests with a "page"-offset parameter to get the correct page of results. The interface will need to be updated to allow users to navigate between pages of results.</li>
    <li>Allow the user to enter "Flash Card" mode. By clicking a button, a user should be able to see a modal view of a single word. When the word is clicked, they should be shown the corresponding definition. The interface should contain navigation to allow the user to load a different, random word from the glossary.</li>
    <li>Allow the user to add Markdown formatting to their entries. Users should be able to <code tabindex="0">_italicize_</code> and <code tabindex="0">**emphasize**</code> parts of the definition using Markdown syntax in the creation form and have these render correctly in the list view.</li>
  </ul>
  <h2 id="nightmare-mode">Nightmare Mode</h2>
  <ul>
    <li>Implement cookie-based authentication to allow each visitor to store their own lists of words.
      <ul>
        <li>Allow users to mark some words as private - only viewable by the user - or public, viewable by anyone visiting the app.</li>
      </ul>
    </li>
  </ul>
</div>

<div>
  <h1 id="challenge-multistep-checkout-experience">Challenge: Multistep Checkout Experience</h1>
  <p>Build a single-page app that takes a user through a series of forms that simulate a shopping cart checkout experience. You should:</p>
  <h2 id="getting-started">Getting Started</h2>
  <ul>
    <li>Use Express to serve up assets and API responses</li>
    <li>Build your UI using ReactJS and pre-compile your views using Webpack and Babel</li>
    <li>Use MySQL to store your user data</li>
  </ul>
  <p>Build your Express app inside <code tabindex="0">server.js</code> and your client app inside the client folder.</p>
  <p>For ease of development, be sure to set Babel to watch for changes in your app.js file to recompile those changes immediately. Additionally, be sure to use nodemon to watch for changes in server.js. See the "scripts" section of <code tabindex="0">package.json</code>.</p>
  <h2 id="basic-requirements">Basic Requirements</h2>
  <p>The homepage of your application should have a <code tabindex="0">Checkout</code> button, which when clicked, takes the user to the first of several forms. We'll call the forms F1, F2, F3.</p>
  <ul>
    <li>F1 collects name, email, and password for account creation.</li>
    <li>F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.</li>
    <li>F3 collects credit card #, expiry date, CVV, and billing zip code.</li>
  </ul>
  <p>At each step, a <code tabindex="0">Next</code> button allows the user to progress to the next step in the checkout process. The final step is a confirmation page which summarizes the data collected in the prior three steps. This page contains a <code tabindex="0">Purchase</code> button that completes the purchase. When the purchase is complete, the user is returned to the homepage.</p>
  <p>No actual shopping cart or products are necessary; you are modeling the checkout process only.</p>
  <h3>A note about keeping track of "users"</h3>
  <p>By default, every new visitor to the site gets assigned a unique "session_id". This is stored as a cookie in the client's browser and can be read on every request to the server using <code tabindex="0">req.session_id</code>.</p>
  <p>You can store this ID alongside form responses to relate responses to a given user and ensure a user can only submit the form once per session.</p>
  <p>For testing purposes you can clear the cookie from the broswer — causing the server to generate and assign a new one&nbsp;— by going to Chrome's Dev Tools &gt; Application tab &gt; Storage/Cookies (sidebar) &gt; clicking on the s_id cookie and deleting it.</p>
  <h2 id="advanced-content">Advanced Content</h2>
  <ul>
    <li>Don't allow the user to proceed until all the required fields are filled in. Address line 2 should be optional. Be sure to display appropriate error messages to the user, so they know why they are not allowed to proceed.</li>
    <li>Validate the form fields. Don't allow the user to proceed to the next step and do not save the data until the fields are valid. Validation means that you must prevent the user from entering <code tabindex="0">haha</code> as the email address -- the email address have a valid data-shape. You'll have to decide which fields deserve validation and which do not. Be sure to display appropriate error messages to the user, so they know why they are not allowed to proceed.</li>
    <li>If the window is closed and reopened, the checkout process should continue at the same step the user was on when the window was closed (it's ok if the fields on the "current" step are blank when the window is reopened). The app should continue to put the remaining data into the same record it was using before the window was closed. Once <code tabindex="0">Purchase</code> is clicked, it should not be possible to continue.</li>
    <li>Allow the user to move back and forward through the checkout process.</li>
    <li>When the user reaches the confirmation page, let the user edit any prior step. After editing fields in that step, the user should be returned to the confirmation page.</li>
  </ul>
  <h2 id="nightmare-mode">Nightmare Mode</h2>
  <ul>
    <li>Refactor to use Redux to store your state.</li>
    <li>If the window is closed and reopened, restore the form field values that were present when the user closed the window.</li>
    <li>Integrate with Google Maps API, adding an address search to verify the ship to address.</li>
    <li>Test your app (either by hand or via automated tests) using different browsers. Fix any issues that arise.</li>
  </ul>
</div>

<hr />

This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.
