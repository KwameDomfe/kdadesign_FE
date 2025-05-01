import React from 'react'
import { Link } from 'react-router-dom'

  const DOM = () => {
  	return (
        <div className="">
          	<header>
                <h2> 
                    Digital Operating Model 
                </h2>
            </header>
            
            <section>
                <h2>Overview</h2>
                <p>
                    The technology landscape is changing swiftly, luring enterprises with new capabilities to augment their investment in digital transformations, leaving them struggling with changes arising out of multi-year transformation journeys. As technology portfolios expand, business leaders question the digital pragmatism of paying for solutions that deliver on IT parameters but often fail to meet business expectations.
                </p>

                <p>
                    Working with our clients, we identified four impediments we must address to succeed in the new AI-led digital world. We found enterprises fail to extract value from their digital journeys due to a lack of focus on customer-centricity, sustainable innovation, data, and agility. We have reinvented our digital operating model to leverage the five pillars of - product-centric value delivery, design for human experiences, a data-first approach, engineering excellence, and talent powered by AI-led learning to help our clients address the challenges and navigate their next digital transformation journey.
                </p>
            </section>
            <section>
                Infosys Digital Operating Model for the AI-first Enterprise
                At Infosys, we have evolved how we deliver digital transformations to address these challenges, encapsulated by the five elements listed below that apply to how enterprises build their products, services, and experiences, with AI infused in every element to create additional value. It is important to note that organizations need to build a robust foundation of digital and cloud ecosystems to avoid disruption while fully exploiting the potential of AI.

                We have seamlessly integrated these elements into how we partner with our clients in their digital journeys, with resultant business outcomes that range from innovation, reduction in total cost of ownership (TCO), brand perception, enhanced net promoter score (NPS), and more.
            </section>

            <section
            >
                <h3>Product +</h3>
                <p>
                    Organizations are shifting to an operating model that is customer-centric and product-led and enabled by a platform ecosystem. Here, a product can be a service, capability, or experience that creates value. Infosys Product Centric Value Delivery, with industry-specific blueprints, product and objectives, and key results (OKR) catalogs helps clients seamlessly make this shift from a project to a product, platform-led delivery. This allows enterprises pivot their teams to the flow of business value with an OKR approach. Tracking the flow of value is enabled through ‘live engineering’, powered by AI on the data residing in the tooling ecosystem.
                </p>
                <Link to = 'experience'
                >
                    Learn More
                </Link>
            </section>
            <section
            >
                <h3>Design +</h3>
                <p>
                    A digital experience must meet the fluid expectations of humans of on-demand, easy-to-use, intelligent, and personalized service. Our award-winning human-first experience design expertise and immersive digital studios help co-create/incubate new experiences and products to enable clients to design innovative, cutting-edge products and services that exceed their customer expectations. This is further amplified by machine-assisted design, leveraging augmented reality, virtual reality, and extended reality (AR, VR, and XR) technologies.
                </p>
                <Link to = 'experience'
                >
                    Learn More
                </Link>
            </section>
            <section
            >
                <h3>Data +</h3>
                <p>
                    A data-first approach brings all the critical organizational data and knowledge together in a consumable manner for systems to become intelligent, for processes to enable agility and speed in decision-making, and to make it relevant for customers. A live data foundation enables utilization of ‘trusted data’, builds connected data ecosystems, implements robust data governance practices, and forms the bedrock for designing and rolling out AI-enabled products and services at scale. To create a data-first organization, Infosys Topaz provides an AI-first set of services, solutions, and platforms using traditional and generative AI technologies that can be used to drive speed and velocity in execution and ensure that we do it responsibly.
                </p>
                <Link to = 'experience'
                >
                    Learn More
                </Link>
            </section>
            <section
            >
                <h3>Engineering +</h3>
                <p>
                    Our digital, cloud, and AI-first architecture leverages an evolutionary architecture approach to embrace and adopt the rapid technology innovations happening in this space. This architecture-first approach is complemented by an engineering ecosystem to accentuate developer experience. We use automation-focused platforms and tools to drive velocity, coupled with advanced engineering practices, to achieve engineering excellence as we partner with clients. Our ‘Responsible by design’ approach ensures privacy, security, green IT, and ethical AI principles are baked into our design and delivery. Infosys Topaz and Infosys Cobalt provide the knowledge, IP, and tools to bring this to life.
                </p>
                <Link to = 'experience'
                >
                    Learn More
                </Link>
            </section>

            <section
            >
                <h3>Talent +</h3>
                <p>
                    Our digital skills ecosystem is infused with AI-led learning paths. We have further evolved our digital career streams, recognizing the diversity of skills and roles needed to deliver successful digital transformation for clients. Our focus on learning includes bringing in mindset shifts through product and platform thinking, design thinking, and experiential learning through hackathons. Our omnichannel digital learning platform, Infosys Wingspan, brings these benefits to clients as well. This is further amplified by our global learning partnerships with academia and leading tech-education companies.
                </p>
                <Link to = 'experience'
                >
                    Learn More
                </Link>
            </section>
	</div>
      )
}

export default DOM