class ResourcesController < ApplicationController
  before_action :check_gid
  def index
    render json: { resources: Hospital.all, editable: @model.id }
  end

  private

  def check_gid
    @model = GlobalID::Locator.locate_signed params[:gid]
    render status: :not_found, json: { error: 'Missing GID' } unless @model
  end
end
