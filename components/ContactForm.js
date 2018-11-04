var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName} className={'dataInput'}/>
        <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName} className={'dataInput'}/>
        <input type={'text'} placeholder={'Email'} value={this.props.contact.email} className={'emailInput'}/>
        <button type={'submit'}>
           Add contact </button>
      </form>
    )
  },
});
