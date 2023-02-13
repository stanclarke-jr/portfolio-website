import { contact } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* Contact form title & subtitle */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title relative before:absolute before:-top-7 before:-left-40 before:hidden before:opacity-50 before:content-contact before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            adipisci neque eius excepturi saepe nisi dolore? Porro neque fugit
            dicta?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          {/* Contact info */}
          <div className="mb-12 flex flex-1 flex-col items-start space-y-8 lg:mb-0 lg:pt-2">
            {contact.map((item) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-x-4 lg:flex-row"
                >
                  <div className="mt-2 mb-4 flex h-14 w-14 items-center justify-start rounded-sm text-2xl text-accent lg:mb-0 lg:items-start lg:justify-center">
                    {icon}
                  </div>
                  <div>
                    <h4 className="mb-1 font-body text-xl">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="font-normal text-accent">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Contact form */}
          <form className="w-full max-w-[780px] space-y-8">
            <div className="flex gap-8">
              <input type="text" placeholder="Your name" className="input" />
              <input type="email" placeholder="Your email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Your message" className="textarea" />
            <button className="btn btn-lg bg-accent hover:bg-accent-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
