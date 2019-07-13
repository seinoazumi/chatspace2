class GroupsController < ApplicationController
  def new
    @group = Group.new
    # @groupと関連しているusersの配列にcurrent_userを加える
    @group.users << current_user
  end

  def create
  end

  def edit
  end

  def update
  end

end
