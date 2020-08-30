import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <hi>First Post</hi>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}