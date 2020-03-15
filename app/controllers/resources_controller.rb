class ResourcesController < ApplicationController
  before_action :check_gid
  def index
    render json: Hospital.all
  end

  private

  def check_gid
    model = GlobalID::Locator.locate_signed params[:gid]
    render status: :not_found, json: { error: 'Missing GID' } unless model
  end
end
