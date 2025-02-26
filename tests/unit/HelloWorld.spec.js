import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

test('renders props.msg when passed', () => {
    const wrapper = mount(HelloWorld, {
        props: { msg: 'Hello Vue Testing!' }
    });

    expect(wrapper.text()).toContain('Hello Vue Testing!');
});
