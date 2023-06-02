import { MdOutlineTour, MdOutlineContactSupport } from 'react-icons/md';
import { GiHiking } from 'react-icons/gi';
import { SiYourtraveldottv } from 'react-icons/si';

export default function Service() {
   return (
      <div className="service">
         <div className="service1">
            <h2>Enjoy Travel Service Agenty</h2>
         </div>
         <div className="service2">
            <div className="serv">
               <div>
                  <MdOutlineTour className="emvel"/>
                  <h4>Tours</h4>
               </div>
               <span>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deserunt adipisci eum, hic quidem recusandae deleniti minima eius commodi suscipit! Lorem ipsum dolor,</p>
                  <h5>More</h5>
               </span>
            </div>
            <div className="serv">
               <div>
                  <GiHiking className="emvel"/>
                  <h4>Hikking</h4>
               </div>
               <span>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deserunt adipisci eum, hic quidem recusandae deleniti minima eius commodi suscipit! Lorem ipsum dolor,</p>
                  <h5>More</h5>
               </span>
            </div>
            <div className="serv">
               <div>
                  <SiYourtraveldottv className="emvel" />
                  <h4>Travel</h4>
               </div>
               <span>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deserunt adipisci eum, hic quidem recusandae deleniti minima eius commodi suscipit! Lorem ipsum dolor,</p>
                  <h5>More</h5>
               </span>
            </div>
            <div className="serv">
               <div>
                  <MdOutlineContactSupport className="emvel"/>
                  <h4>Support</h4>
               </div>
               <span>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deserunt adipisci eum, hic quidem recusandae deleniti minima eius commodi suscipit! Lorem ipsum dolor,</p>
                  <h5>More</h5>
               </span>
            </div>
         </div>
      </div>
   )
}
