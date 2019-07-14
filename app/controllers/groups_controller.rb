class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]
  def index
    @groups = Group.all
  end

  def new
    @group = Group.new
    # @groupと関連しているusersの配列にcurrent_userを加える
    # この下の行の記述がない場合、current_userのボックスにチェックが入らない
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to root_path, notice: 'グループ情報を編集しました'
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, {:user_ids => []})
  end

  def set_group
    @group = Group.find(params[:id])
  end

end
