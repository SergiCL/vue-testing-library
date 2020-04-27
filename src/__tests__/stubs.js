import {render} from '@testing-library/vue'
import Stubs from './components/Stubs'

test('Form contains search button', () => {
  const DirectiveMock = {
    template: '<p>fake template</p>',
  }

  const {getByText} = render(Stubs, {
    global: {
      stubs: {
        directive: DirectiveMock,
      },
    },
  })

  getByText('fake template')
})
