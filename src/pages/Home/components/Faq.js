import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "What kind of materials are used in your toys?",
          "answer": "We prioritize safety and durability by using non-toxic, pet-safe materials like natural rubber, cotton, and eco-friendly fabrics. Each toy is designed to withstand hours of play while keeping your pets safe."
        },
        {
          "id": 2,
          "question": "How long does shipping take?",
          "answer": "We aim to ship all orders within 1-2 business days. Delivery times may vary depending on your location, but most orders arrive within 3-5 business days"
        },
        {
          "id": 3,
          "question": "Do you offer returns or exchanges on your products?",
          "answer": "Yes, we offer a 30-day return or exchange policy on all products, provided they are unused and in their original packaging. If your item arrives damaged or defective, we will happily replace it at no cost."
        },
        {
          "id": 4,
          "question": "Are your products suitable for all breeds and sizes of pets?",
          "answer": "Yes, our products are designed with a variety of pets in mind, from small breeds to larger ones. Each product description provides details on suitability for different sizes and breeds, ensuring you find the perfect fit for your pet’s needs."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
             { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} />
             ))}           
            </div>
      </section>
  )
}