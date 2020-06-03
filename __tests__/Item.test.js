import ItemComponent from '../components/Item';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';


const fakeItem = {
    id: 'ABC123',
    title: 'A Cool Item',
    price: 5000,
    description: 'A really cool item.',
    image: 'dog.jpg',
    largeImage: 'largeDog.jpg',
}

describe('<Item/>', () => {
    // it('renders and displays properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />)
    //     console.log(wrapper.debug())
    // })

    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
})