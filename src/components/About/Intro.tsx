import 'twin.macro'
import Image from 'next/image'

export default function Intro() {
  return (
    <div>






      <h1 tw="block text-5xl font-bold leading-none mb-10">About</h1>

      <div tw="grid grid-cols-1 gap-4">
        <p>
          My career started as a web designer in 2009. Back in the days when
          photoshop reigned king, and slicing up .psd files was common practice.
          In mid 2015, I switched gears and went in all in with programming.
          Since then, I’ve been programming web interfaces and building API
          servers. For frontend work, I specialize in React (NextJS, JAMStack),
          and Go is my language of choice for anything server related.{' '}
        </p>
        <p>
          I've been a US expat since 2012 and currently reside in France. If you
          ever find yourself in the Paris region, let's grab a beer!{' '}
          <a tw="mt-8 text-blue-600" href="https://twitter.com/jonlprd">
            @jonlprd
          </a>
        </p>
        <div>
          <Image
            height={873}
            width={736}
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcv3VrPQAHDgKqSdQCcwAAAABJRU5ErkJggg=="
            placeholder="blur"
            tw="rounded-xl"
            alt="jon-andorra"
            src="/img/jon-andorra.jpeg"
          />
        </div>
      </div>
    </div>
  )
}
