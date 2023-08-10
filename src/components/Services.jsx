import servicesA from '../assets/services-1.png'
import servicesB from '../assets/services-2.png'
import servicesC from '../assets/services-3.png'
import servicesD from '../assets/services-4.png'
import servicesBackground from '../assets/service-background.jpg'

export default function Services (){
    return(
        <div>
            <div className='relative'>
                <div>
                    <img src={servicesBackground} className='absolute w-full h-full  -z-40 backdrop-brightness-100'/>
                </div>
                <div class="absolute inset-0 bg-black bg-opacity-70">
                </div>
                <div className="flex flex-col justify-center text-white gap-4 py-10 px-10">
                    <h1 className=" text-5xl text-center mb-4 z-20"> Our Services </h1>
                    <p className="text-2xl text-center z-20">Providing hope and shelter to stray dogs. Join us in giving these furry friends a chance at a better life through compassion and care</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 '>
                <div className='dog-card flex flex-col justify-center items-center py-8 px-10 rounded bg-white z-20'>
                    <img src={servicesA} className='h-20 w-20 mb-3'/>
                    <h2 className='my-4'>Adoption</h2>
                    <p className='mt-3 text-center'>Offer personalized adoption consultations where potential adopters can discuss their preferences, lifestyle, and expectations. Provide guidance on choosing the right dog for their family and living situation.</p>
                </div>
                <div className=' dog-card flex flex-col justify-center items-center py-8 px-10 rounded bg-white z-20'>
                    <img src={servicesB} className='h-20 w-20 text-center mb-3'/>
                    <h2 className='my-4'>Dog walking</h2>
                    <p className='mt-3'>Detail the advantages of hiring a professional dog walker, including maintaining a consistent exercise routine, alleviating boredom, and ensuring dogs get the attention they need even when their owners are busy.</p>
                </div>
                <div className='dog-card flex flex-col justify-center items-center py-8 px-10 rounded bg-white z-20'>
                    <img src={servicesC} className='h-20 w-20 text-center mb-3'/>
                    <h2 className='my-4'>Dog training</h2>
                    <p className='mt-3'>Offer training services to help new dog owners provide a smooth transition for their newly adopted pet. This could include basic obedience training, house training, and socialization tips.</p>
                </div>
                <div className='dog-card flex flex-col justify-center items-center py-8 px-10 rounded bg-white z-20'>
                    <img src={servicesD} className='h-20 w-20 text-center mb-3'/>
                    <h2 className='my-4'>Volunteer</h2>
                    <p className='mt-3'>Volunteering in dog training within your service offerings can be a great way to engage with potential volunteers and showcase your commitment to both dogs and the community</p>
                </div>
                </div>           
            </div>
        </div>
        
    )
}