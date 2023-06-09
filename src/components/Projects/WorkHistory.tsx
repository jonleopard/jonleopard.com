import "twin.macro";

export default function WorkHistory() {
  return (
    <div>
      <h1 tw="text-2xl text-gray-900 font-semibold pb-2">Work History</h1>

      <div tw="grid grid-cols-1 gap-4">
        <div>
          <p tw="text-lg">
            Founded{" "}
            <a tw="underline" href="https://tinysoftware.io">
              Tiny Software
            </a>
          </p>
          <p tw="text-gray-600">August 2021 - Present</p>
        </div>

        <div>
          <p tw="text-lg">Freelance Developer</p>
          <p tw="text-gray-600">April 2020 - Present</p>
        </div>

        <div>
          <p tw="text-lg">
            Creationshop • Frontend developer and Project manager
          </p>
          <p tw="text-gray-600">March 2009 - March 2021</p>
        </div>

        <div>
          <p tw="text-lg">UpFX • Frontend developer</p>
          <p tw="text-gray-600">April 2014 - November 2016</p>
        </div>

        <div>
          <p tw="text-lg">
            1Cart • Frontend designer, Wireframer, Project manager
          </p>
          <p tw="text-gray-600">Feb 2010 - September 2013</p>
        </div>

        <div>
          <p tw="text-lg">GoingUP • Frontend designer & Project manager</p>
          <p tw="text-gray-600">May 2009 - November 2010</p>
        </div>

        <div>
          <a
            tw="text-blue-600 text-lg"
            href="https://www.linkedin.com/in/jonathan-leopard"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Linkedin profile →
          </a>
        </div>
      </div>
    </div>
  );
}
