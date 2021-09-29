// Given multiple children, returns only 1 to be rendered based on props.index
export default function TabCarousel(props) {
  if (props.children) {
	if (props.children[props.index]) {
	  return props.children[props.index]
	}
  }
  return null
}