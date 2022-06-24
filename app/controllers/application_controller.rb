class ApplicationController < ActionController::Base
  #+ Redirect to page after sign in:
  #+ https://github.com/heartcombo/devise/wiki/How-To:-Redirect-to-a-specific-page-on-successful-sign-in

  # protected

  # # Ensure the user is redirected to the root page
  # def after_sign_in_path_for(resource)
  #   root_path
  # end
end
