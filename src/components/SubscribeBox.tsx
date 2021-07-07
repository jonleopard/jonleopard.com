import { useState } from 'react';
import Emoji from 'a11y-react-emoji';
import 'twin.macro';

export default function SubscribeBox() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('pending');
  const [errorMessage, setErrorMessage] = useState('');

  function onChange(e) {
    if (status !== 'pending') setStatus('pending');
    return setEmail(e.target.value.trim());
  }

  async function submit(e) {
    e.preventDefault();

    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
    console.log(res);

    const { error } = await res.json();

    if (error) {
      setStatus('error');
      setErrorMessage(error);
      return;
    }

    setEmail('');
    setStatus('succeeded');
  }

  return (
    <>
      <div tw="bg-white">
        <div tw="max-w-7xl mx-auto pt-12">
          <h2 tw="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Subscribe to the newsletter
          </h2>
          <p tw="text-lg tracking-tight text-gray-600">
            Get a monthly newsletter delivered straight to your inbox! I aim to
            write 2 - 4 times a month, and include curated news from topics such
            as tech, to science. Your email stays private and spam free!
          </p>
          {status === 'succeeded' ? (
            <p tw="text-green-500 mt-2">
              <Emoji tw="mr-1" symbol="🎉" label="Party Popper" /> You're in!
              Thanks for subscribing :)
            </p>
          ) : (
            <form tw="mt-8 sm:flex" onSubmit={submit}>
              <label htmlFor="email-address" tw="sr-only">
                Email address
              </label>
              <input
                value={email}
                disabled={status === 'loading'}
                onChange={onChange}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                tw="w-full px-5 py-3 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500 sm:max-w-xs border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <div tw="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  tw="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
          {status === 'error' && <p tw="pt-3 text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}
