class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :adjust_format_for_iphone

  private

    # Set iPhone format if request to iphone.trawlr.com
    def adjust_format_for_iphone
      if request.format == :html
        request.format = :iphone if mobile_device?
      end
    end  

    def mobile_device?
      user_agent = request.user_agent
      user_agent =~ /Mobile|webOS/
    end
    helper_method :mobile_device?
end
