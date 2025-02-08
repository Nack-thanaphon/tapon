import { defaultMetadata } from "../shared/meta-data";
import Navigation from "../shared/components/Navigation";
import Customer from "../shared/components/Customer";


export const metadata = {
  ...defaultMetadata,
  title: 'Tap On',
  description: 'Tap on '
}


export default async function HomePage() {

  return (
    <>
      <div className="bg-gray-200 text-center p-12">
        <h1 className="text-3xl font-bold text-gray-900">Expand Your Business Horizons with NFC Web Services</h1>
        <p className="text-xl text-gray-700 mt-4">Fast, reliable, and scalable solutions tailored to boost your market presence.</p>
        {/* Using ShadUI Button if available */}
        {/* <Button className="mt-8">Learn More</Button> */}
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
      <Navigation />
      <Customer />
      <div>
        <h2>Benefits of NFC Web Services</h2>
        <ul>
          <li>Scalable solutions that grow with your business.</li>
          <li>Easy integration with multiple platforms.</li>
          <li>Enhance your market presence with minimal effort.</li>
        </ul>
      </div>
      <div>
        <h2>Package</h2>
        <ul>
          <li>Scalable solutions that grow with your business.</li>
          <li>Easy integration with multiple platforms.</li>
          <li>Enhance your market presence with minimal effort.</li>
        </ul>
      </div>
      <div>
        <h2>Contact Me</h2>
        <ul>
          <li>Scalable solutions that grow with your business.</li>
          <li>Easy integration with multiple platforms.</li>
          <li>Enhance your market presence with minimal effort.</li>
        </ul>
      </div>
      <div>
        <h2>Our Client</h2>
        <ul>
          <li>Scalable solutions that grow with your business.</li>
          <li>Easy integration with multiple platforms.</li>
          <li>Enhance your market presence with minimal effort.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-red-400">Review</h2>
        <ul>
          <li>Scalable solutions that grow with your business.</li>
          <li>Easy integration with multiple platforms.</li>
          <li>Enhance your market presence with minimal effort.</li>
        </ul>
      </div>
    </>
  );
}