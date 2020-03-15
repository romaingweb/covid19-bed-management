class ResourcesController < ApplicationController
  before_action :check_gid
  def index
    render json: { resources: Hospital.all, editable: @model.id }
  end

  def update
    @model.update(resources: resources_params)
    render json: { resources: Hospital.all, editable: @model.id }
  end

  private

  def resources_params
    params.require(:resources).permit!
  end

  def check_gid
    @model = GlobalID::Locator.locate_signed params[:gid]
    render status: :not_found, json: { error: 'Missing GID' } unless @model
  end
end
