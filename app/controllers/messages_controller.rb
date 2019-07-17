class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = @group.messages.new
  end

  def create
    @message = @group.messages.new
    if @message.save
      redirect_to group_messages_path(@group)
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end

  private

  def set_group
    @group = Group.find(params[:group_id])
  end

  
end
