import Footer from '@components/Footer';
import { useState } from 'react';

export default function Contact() {
  let [count, setCount] = useState(0);
  return (
    <div className='container'>
      <main>
        <div> This is the count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        <form name="contact" action="/success" method="POST" data-netlify="true">
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <label htmlFor='yourname'>Your Name:</label>
            <input type='text' name='name' id='yourname' />
          </p>
          <p>
            <label htmlFor='youremail'>Your Email: </label>{' '}
            <input type='email' name='email' id='youremail' />
          </p>
          <p>
            <label htmlFor='yourmessage'>Message: </label>
            <textarea name='message' id='yourmessage'></textarea>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
