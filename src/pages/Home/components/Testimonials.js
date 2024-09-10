export const Testimonials = () => {
  return (
    <section className="flex flex-wrap justify-center lg:flex-row">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline">Customer experience</h1>
        
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amazing Quality Dog Toys!</h3>
                        <p className="my-4">"The quality of the dog toys is amazing! My pup hasn’t stopped playing since we got them."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt=""/>
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Emily Roberts</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Pet Parent at Happy Tails</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fast Delivery and Cat Approved!</h3>
                        <p className="my-4">"Fast delivery and my cat absolutely loves the new toys. Couldn't be happier with the service!"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt=""/>
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Roberta Casas</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Owner of Whiskers & Paws</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top-Notch Pet Accessories!</h3>
                        <p className="my-4">"The best pet accessories I've found! Everything from the toys to the paw care products is top-notch."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt=""/>
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Jese Leos</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Animal Lover at Pawfect Playtime</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Durable Toys My Dog Loves!</h3>
                        <p className="my-4">"Highly recommend this shop! The products are durable, and my dog is obsessed with the new chew toy."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt=""/>
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Joseph McFall</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Dog Trainer at Furry Friends Academy</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>

    </section>
  )
}
