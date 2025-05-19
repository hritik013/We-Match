import ServiceCard from "./ServiceCard";
import PropTypes from 'prop-types'

const Services = ({ services }) => {

    return (
        <div>
            <h1 className="text-5xl text-center my-5 font-special">Services</h1>

            <div className="flex justify-center" data-aos="zoom-in">
                <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-4  md:my-8 ">
                    {
                        services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
Services.propTypes = {
    services: PropTypes.array
}