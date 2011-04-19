class DashboardController < ApplicationController
  def index
    respond_to do |format|
      format.html # index.html.erb
      format.iphone 
      format.xml  { render :xml => @authors }
    end    
  end

end
