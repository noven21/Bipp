// Initialize and add the map
function initMap() {
	// Your location
	const loc = { lat: 14.599512, lng: 120.984222 };
	// Centered map on location
	const map = new google.maps.Map(
		document.querySelector('.map'),
		{
			zoom: 14,
			center: loc,
		}
	);
	// The marker, positioned at location
	const marker = new google.maps.Marker({
		position: loc,
		map: map,
	});
}

// active nav
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 200) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}

// Testimonial
const testimonialsContainer = document.querySelector(
	'.testimonials-container'
);
const testimonial = document.querySelector(
	'.testimonial'
);
const userImage = document.querySelector(
	'.user-image'
);
const username = document.querySelector(
	'.username'
);
const role = document.querySelector('.role');

const testimonials = [
	{
		name: 'Miyah Myles',
		position: 'Marketing',
		photo:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
		text:
			'The best hotel I’ve ever been privileged enough to stay at. Gorgeous building, and it only gets more breathtaking when you walk in. High quality rooms (there was even a tv by the shower), and high quality service. Also, they are one of few hotels that allow people under 21 to book a reservation.',
	},
	{
		name: 'June Cha',
		position: 'Software Engineer',
		photo:
			'https://randomuser.me/api/portraits/women/44.jpg',
		text:
			'Excellent property and very convenient to USC activities. Front desk staff is extremely efficient, pleasant and helpful. Property is clean and has a fantastic old time charm.',
	},
	{
		name: 'Iida Niskanen',
		position: 'Data Entry',
		photo:
			'https://randomuser.me/api/portraits/women/68.jpg',
		text:
			'The staff at this property are all great! They all go above and beyond to make your stay comfortable. Please (HN) give your staff awards!',
	},
	{
		name: 'Renee Sims',
		position: 'Receptionist',
		photo:
			'https://randomuser.me/api/portraits/women/65.jpg',
		text:
			'I had a wonderful experience at the (HN). Every staff member I encountered, from the valet to the check- in to the cleaning staff were delightful and eager to help! Thank you! Will recommend to my colleagues!',
	},
	{
		name: 'Jonathan Nunfiez',
		position: 'Graphic Designer',
		photo:
			'https://randomuser.me/api/portraits/men/43.jpg',
		text:
			'The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown (L).',
	},
	{
		name: 'Sasha Ho',
		position: 'Accountant',
		photo:
			'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
		text:
			'Took advantage of the downtown location to walk to dinner, check out a couple galleries, and have drinks. It was great. Service top notch as always. Bed comfort can not be beat.',
	},
	{
		name: 'Veeti Seppanen',
		position: 'Director',
		photo:
			'https://randomuser.me/api/portraits/men/97.jpg',
		text:
			'This is the perfect hotel for a weekend getaway in (L). The downtown area on Main Street is a best kept secret and the (HN) offers everything you need if you don’t feel like venturing out.',
	},
];

let idx = 1;

function updateTestimonial() {
	const {
		name,
		position,
		photo,
		text,
	} = testimonials[idx];

	testimonial.innerHTML = text;
	userImage.src = photo;
	username.innerHTML = name;
	role.innerHTML = position;

	idx++;

	if (idx > testimonials.length - 1) {
		idx = 0;
	}
}

setInterval(updateTestimonial, 10000);

// animate on scroll
AOS.init({
	offset: 200,
	delay: 0,
	duration: 1000,
});
