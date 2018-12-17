# rn-gradients

A 100% JS solution to adding linear and radial gradients to your React Native projects.

_Note: This project was an experiment to see if color gradients were possible in React Native with just pure JS. This package IS NOT performant and I would only recommend using it if you can't get the other (native) gradient packages to work or if you are only rendering 1 - 2 gradients at a time._

![](linear.gif | width=80)

![](radial.gif | width=80)

### Install

`npm install rn-gradients`

### Import

`import { LinearGradient, RadialGradient } from 'rn-gradients';`

### Example

(more in the src folder)

```javascript
<LinearGradient
  height={250}
  width={370}
  colors={['#ade', '#fde']}
  rotation={42}
  style={{ justifyContent: 'center', alignItems: 'center' }}
>
  <Text style={{ fontSize: 42, fontWeight: '900', color: '#fff9' }}>Hello World</Text>
</LinearGradient>
```


### Props

```javascript
LinearGradient.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  intervals: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.number // in degrees - NOT radians.
};

LinearGradient.defaultProps = {
  height: 0,
  width: 0,
  rotation: 0
};
```

```javascript
RadialGradient.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  intervals: PropTypes.arrayOf(PropTypes.number)
};

RadialGradient.defaultProps = {
  height: 0,
  width: 0
};
```