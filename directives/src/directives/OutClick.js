const refs = new Map();

function outClickHandler(el, handler, event) {
  const isOutClick = event.target !== el && !el.contains(event.target);
  const isFunction = typeof handler === 'function';
  const objHandler = {
    handler: isFunction ? handler : handler.handler,
    middleware: handler.middleware || (isOutClick => isOutClick)
  };

  return objHandler.middleware(isOutClick)
    ? objHandler.handler(el, event)
    : null;
}

const OutClick = {
  bind(el, binding) {
    refs.set(el, outClickHandler.bind(null, el, binding.value));

    window.addEventListener('click', refs.get(el));
  },
  unbind(el) {
    window.removeEventListener('click', refs.get(el));

    refs.delete(el);
  }
};

export default OutClick;
