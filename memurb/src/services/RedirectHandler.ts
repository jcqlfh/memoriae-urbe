const RedirectHandler = {
	shouldRedirect: function (origin: string): boolean {
		let profile = JSON.parse(localStorage.getItem('MEMURB_PROFILE') ?? '{}');
		if (!profile.user) {
			localStorage.setItem('MEMURB_REDIRECT_AFTER_LOGIN', origin);
			return true;
		}
		return false;
	}
};

export default RedirectHandler;
