import Image from 'next/image'
import React from 'react'

export const Clients = () => {
  return (
    <section id="clients" className="clients">
			<div className="section-heading text-center">
				<h2>clients</h2>
			</div>
			<div className="clients-area">
				<div className="container">
					<div className="owl-carousel owl-theme" id="client">
						<div className="item">
							<a href="#">
								<Image src="/assets/images/clients/c1.png" alt="brand-image"  width={100} height={100} />
							</a>
						</div>
						<div className="item">
							<a href="#">
								<Image src="/assets/images/clients/c2.png" alt="brand-image" width={100} height={100} />
							</a>
						</div>
						<div className="item">
							<a href="#">
								<Image src="/assets/images/clients/c3.png" alt="brand-image" width={100} height={100} />
							</a>
						</div>
						<div className="item">
							<a href="#">
								<Image src="/assets/images/clients/c4.png" alt="brand-image" width={100} height={100} />
							</a>
						</div>
						<div className="item">
							<a href="#">
								<Image src="/assets/images/clients/c5.png" alt="brand-image" width={100} height={100} />
							</a>
						</div>
						<div className="item">
							<a href="#">
								<Image src="/assets/images/clients/c6.png" alt="brand-image" width={100} height={100} />
							</a>
						</div>
						<div className="item">
							<a href="#">
								<Image src="/assets/images/clients/c7.png" alt="brand-image" width={100} height={100} />
							</a>
						</div>
					</div>
				</div>
			</div>

		</section>
  )
}
