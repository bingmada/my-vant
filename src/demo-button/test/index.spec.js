/*
 * @Author: liyingda
 * @Date: 2024-04-09 19:43:12
 * @LastEditors: liyingda
 * @LastEditTime: 2024-04-10 16:58:21
 * @Description:
 */
import { mount } from '@vue/test-utils';
import DemoButton from '../../demo-button';

test('render demo button', () => {
  const wrapper = mount(DemoButton);
  expect(wrapper.html()).toMatchSnapshot();
});
